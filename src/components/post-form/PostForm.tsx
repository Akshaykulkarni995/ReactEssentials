import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Select from "../Select";
import appweitrService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import RealTimeEditor from "../RealTimeEditor";
import { useSelector } from "react-redux";
import Input from "../Input";

const PostForm = ({ post }: any) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
        image: post?.image || "",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state: any) => state.auth.userData);
  const submit = async (data: any) => {
    if (post) {
      const file = data.image[0]
        ? await appweitrService.uploadFile(data.image[0])
        : null;

      if (file) {
        appweitrService.deleteFile(post.featuredImage);
      }
      const dbPost = await appweitrService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appweitrService.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appweitrService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value: any) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLocaleLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/[\s_]/g, "-");
  }, []);

  React.useEffect(() => {
    watch((value: any, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          type="text"
          label="Title"
          placeholder="title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          type="text"
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e: any) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RealTimeEditor
          name="Content :"
          label="Content :"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="1/3 px-2">
        <Input
          label="Featured Image"
          className="mb-4"
          type="file"
          accept="image/png, image/jpg, image/jpeg "
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appweitrService.filePreview(post.featuredImage)}
              alt={post.title}
            ></img>
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="status"
          className="mb-4"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-50" : "bg-red-100"}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
