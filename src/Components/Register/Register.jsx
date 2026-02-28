import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoKeyOutline } from 'react-icons/io5';
import { FiAtSign } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineDateRange } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from './../../../node_modules/@hookform/resolvers/zod/src/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const schema = zod
  .object({
    name: zod
      .string()
      .nonempty('Full name is required.')
      .min(3, 'min length is 3 chars')
      .max(10, 'max length is 10 chars'),
    username: zod.string().optional(),
    email: zod
      .email('Invalid email address.')
      .nonempty('Email is required.')
      .regex(
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        'Please enter a valid email address.',
      ),
    gender: zod.enum(['male', 'female'], 'Gender is required.'),
    dateOfBirth: zod.string().refine((date) => {
      const userDate = new Date(date);
      const carrentDate = new Date();
      if (carrentDate.getFullYear() - userDate.getFullYear() >= 10) {
        return true;
      } else {
        return false;
      }
    }, 'Date of birth is required.'),
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Password must include uppercase, lowercase, number, and special character.',
      )
      .nonempty('Password is required.'),
    rePassword: zod.string().nonempty('Please confirm your password.'),
  })
  .refine(
    (data) => {
      if (data.password === data.rePassword) {
        return true;
      } else {
        return false;
      }
    },
    { error: 'Passwords do not match.', path: ['rePassword'] },
  );
export default function Register({ setloginOrRegister }) {
  const navigate = useNavigate();
  const [apiErorr, setapiErorr] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      gender: '',
      dateOfBirth: '',
      password: '',
      rePassword: '',
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  });
  const { register, handleSubmit } = form;
  function singUpApi(values) {
    setisLoading(true);
    axios
      .post(`https://route-posts.routemisr.com/users/signup`, values)
      .then((res) => {
        if (res.data.message) {
          setloginOrRegister('login');
          navigate('/login');
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
      {' '}
      <h2 className="text-2xl font-extrabold text-slate-900">Create a new account</h2>
      <p className="mt-1 text-sm text-slate-500">It is quick and easy.</p>
      <form onSubmit={handleSubmit(singUpApi)} className="mt-5 space-y-3.5">
        {/* name input */}
        <div>
          <div className="relative">
            <FiUser className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              {...register('name')}
              id="name"
              type="text"
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white border-slate-200 focus:border-[#00298d]"
              placeholder="Full name"
            />
          </div>
          {form.formState.errors.name && form.formState.touchedFields.name && (
            <p className="mt-1 text-xs font-semibold text-rose-600">
              {form.formState.errors.name?.message}
            </p>
          )}
        </div>
        {/* Username (optional) */}
        <div>
          <div className="relative">
            <FiAtSign className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              {...register('username')}
              type="text"
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white border-slate-200 focus:border-[#00298d]"
              placeholder="Username (optional)"
              id="username"
            />
          </div>
        </div>
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
        {/* gender */}
        <div>
          <div className="relative">
            <FiUsers className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              {...register('gender')}
              id="gender"
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white border-slate-200 focus:border-[#00298d]"
            >
              <option value>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {form.formState.errors.name && form.formState.touchedFields.name && (
            <p className="mt-1 text-xs font-semibold text-rose-600">
              {form.formState.errors.gender?.message}
            </p>
          )}
        </div>
        {/* Date */}
        <div>
          <div className="relative">
            <MdOutlineDateRange className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              {...register('dateOfBirth')}
              type="date"
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white border-slate-200 focus:border-[#00298d]"
              placeholder="Date of birth"
              id="dateOfBirth"
            />
          </div>
          {form.formState.errors.name && form.formState.touchedFields.name && (
            <p className="mt-1 text-xs font-semibold text-rose-600">
              {form.formState.errors.dateOfBirth?.message}
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
        {/* rePassword */}
        <div>
          <div className="relative">
            <IoKeyOutline className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              {...register('rePassword')}
              type="password"
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:bg-white border-slate-200 focus:border-[#00298d]"
              placeholder="Confirm password"
              id="rePassword"
            />
          </div>
          {form.formState.errors.name && form.formState.touchedFields.name && (
            <p className="mt-1 text-xs font-semibold text-rose-600">
              {form.formState.errors.rePassword?.message}
            </p>
          )}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full rounded-xl py-3 text-base font-extrabold  disabled:cursor-not-allowed text-white transition disabled:opacity-60 bg-[#00298d] hover:bg-[#001f6b] cursor-pointer"
        >
          {isLoading ? 'Creating account...' : 'Create New Account'}
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
