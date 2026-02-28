import { IoKeyOutline } from 'react-icons/io5';
import React, { useState } from 'react';
import { FiAtSign } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from './../../../node_modules/@hookform/resolvers/zod/src/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const schema = zod.object({
  email: zod
    .email('Invalid email address.')
    .nonempty('Email is required.')
    .regex(
      /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      'Please enter a valid email address.',
    ),
  password: zod
    .string()
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Password must include uppercase, lowercase, number, and special character.',
    )
    .nonempty('Password is required.'),
});

export default function Login() {
  const navigate = useNavigate();
  const [apiErorr, setapiErorr] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  });
  const { register, handleSubmit } = form;
  function singInApi(values) {
    setisLoading(true);
    axios
      .post(`https://route-posts.routemisr.com/users/signin`, values)
      .then((res) => {
        if (res.data.message) {
          navigate('/home');
          setisLoading(false);
        }
      })
      .catch((err) => {
        setapiErorr(err.response.data.message);
        setisLoading(false);
      });
  }
  return (
    <>
      <h2 className="text-2xl font-extrabold text-slate-900">Log in to Route Posts</h2>
      <p className="mt-1 text-sm text-slate-500">Log in and continue your social journey.</p>

      <form onSubmit={handleSubmit(singInApi)} className="mt-5 space-y-3.5">
        {/* Email address */}
        <div>
          <div className="relative">
            <FiAtSign className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              {...register('email')}
              type="email"
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white border-slate-200 focus:border-[#00298d]"
              placeholder="Email address"
              id="email"
            />
          </div>
          {form.formState.errors.name && form.formState.touchedFields.name && (
            <p className="mt-1 text-xs font-semibold text-rose-600">
              {form.formState.errors.email?.message}
            </p>
          )}
        </div>

        {/* password */}
        <div>
          <div className="relative">
            <IoKeyOutline className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              {...register('password')}
              type="password"
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white border-slate-200 focus:border-[#00298d]"
              placeholder="Password"
              id="password"
            />
          </div>
          {form.formState.errors.name && form.formState.touchedFields.name && (
            <p className="mt-1 text-xs font-semibold text-rose-600">
              {form.formState.errors.password?.message}
            </p>
          )}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full rounded-xl py-3 text-base font-extrabold text-white transition disabled:opacity-60 bg-[#00298d] hover:bg-[#001f6b] cursor-pointer"
        >
          {isLoading ? 'Please wait...' : 'Log In'}
        </button>
        <button
          type="submit"
          className="mx-auto block text-sm font-semibold disabled:cursor-not-allowed text-[#00298d] transition hover:underline cursor-pointer"
        >
          Forgot password?
        </button>
        {apiErorr && (
          <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700 text-center">
            {apiErorr}
          </p>
        )}
      </form>
    </>
  );
}
