"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./TododList.module.scss";

const TodoList = () => {
  const { register, handleSubmit } = useForm<TODO>();
  const onSubmit: SubmitHandler<TODO> = (data) => console.log(data);

  return (
    <div className={styles.mainBlock}>
      TododLIst
      <form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} />
        <input {...register("file", { required: true })} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default TodoList;
