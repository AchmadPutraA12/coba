import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect, useState } from 'react';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import Pagination from "@/Components/Pagination";
import { FaRegCircleXmark } from "react-icons/fa6";
import PopupTodo from "@/Components/PopupTodo";

const Todo = ({ todos }) => {
    const { flash, errors } = usePage().props;

    const [showConfirm, setShowConfirm] = useState(false);

    const [todoProps, setTodoProps] = useState({
        id: "",
        name: "",
    });

    useEffect(() => {
        if (flash.success) {
            Swal.fire({
                title: 'Pesan',
                text: flash.success,
                icon: 'success',
            });
        }
    }, [flash]);

    const { data, setData, reset } = useForm({
        name: '',
    });

    const handleChange = (e) => {
        setData('name', e.target.value)
    };

    const storeTodo = (e) => {
        e.preventDefault();
        router.post('/todo', data, {
            onSuccess: () => {
                reset();
            }
        });
    };

    const handleComplete = (id, name, isComplete) => {
        let title = document.getElementById(id);
        title.innerText = "Processing...";
        router.patch(`/todo/edit-complete/${id}`, {
            is_complete: !isComplete
        }, {
            onSuccess: () => {
                title.innerText = name;
            }
        });
    }

    const handleShowConfirmation = (id, name) => {
        setShowConfirm(true);
        setTodoProps({ id: id, name: name });
    }

    return (
        <>
            <Head title="Todo" />
            <AdminLayout>
                <div className="items-center justify-center flex-col px-12">
                    <h2 className="font-semibold text-4xl my-8 text-center">
                        Todo App
                    </h2>

                    <form onSubmit={storeTodo}>
                        <div className="flex gap-4 items-center mb-6">
                            <input
                                type="text"
                                placeholder="Enter todo here"
                                className="px-4 py-2 rounded-md grow"
                                onChange={handleChange}
                                value={data.name}
                            />
                            <button className="py-2 px-4 rounded-md bg-indigo-500 text-white">
                                Save
                            </button>
                        </div>
                        {errors.name && (
                            <p className="text-red-700 text-sm">
                                {errors.name}
                            </p>
                        )}
                    </form>
                    <div className="flex-col w-full gap-4 items-center justify-center">
                        {todos.data.map((todo, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`flex justify-between item-center my-4 py-3 px-6 
                                    ${todo.is_complete ? "bg-green-100" : "bg-red-100"} rounded-md`}>

                                    <h3 id={todo.id}>{todo.name}</h3>
                                    <div className="flex items-center justify-center gap-2">
                                        {todo.is_complete ? (
                                            <FaRegCircleXmark size={22}
                                                className="cursor-pointer text-red-500"
                                                onClick={() =>
                                                    handleComplete(
                                                        todo.id,
                                                        todo.name,
                                                        todo.is_complete)
                                                }
                                            />
                                        ) : (
                                            <>
                                                <FaRegCheckCircle size={20}
                                                    className="cursor-pointer"
                                                    onClick={() =>
                                                        handleComplete(
                                                            todo.id,
                                                            todo.name,
                                                            todo.is_complete)
                                                    }
                                                />
                                                <Link href={`todo/edit/${todo.id}`}>
                                                    <BsPencilSquare size={20} />
                                                </Link>
                                            </>
                                        )}


                                        | {" "}
                                        <FaTrashAlt size={20} className="cursor-pointer" onClick={() => handleShowConfirmation(todo.id, todo.name)} />

                                        {showConfirm && <PopupTodo todoProps={todoProps} setShowConfirm={setShowConfirm} />}
                                    </div>
                                </div>
                            )
                        })}

                        {/* <div className="flex justify-between item-center my-4 py-3 px-6 bg-green-100 rounded-md">
                            <h3>Lorem ipsum dolor sit</h3>
                            <div className="flex items-center justify-center gap-2">
                                <FaRegCheckCircle size={20} /> | {" "} <FaTrashAlt size={20} />
                            </div>
                        </div> */}
                    </div>
                    <div className="mt-8 flex justify-end items-center">
                        <Pagination todos={todos} />
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};

export default Todo;
