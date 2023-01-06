import { useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from '@/Components/InputError';
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";
import { Link, Head, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };


    return (
        <>
            <Head title="Sign up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                            

                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel forInput="fullname" value="Full Name"  />
                                    <TextInput 
                                        type="text" 
                                        name="name"
                                        value={data.name}
                                        placeholder="Your fullname..." 
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel forInput="email" value="Email Address"  />
                                    <TextInput 
                                        type="email" 
                                        name="email"
                                        value={data.email}
                                        placeholder="Your Email Address" 
                                        autoComplete="username"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel forInput="password" value="Password"  />
                                    <TextInput 
                                        type="password" 
                                        name="password"
                                        value={data.password}
                                        placeholder="Your Password" 
                                        autoComplete="new-password"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="">
                                <InputLabel forInput="password_confirmation" value="Confirm Password" />

                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            placeholder="Confirm Your Password"
                                            value={data.password_confirmation}
                                            // className="mt-1 block w-full"
                                            handleChange={onHandleChange}
                                            required
                                        />
                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                    <DangerButton type="submit" className=" bg-alerange" processing={processing}>
                                        <span className="text-base font-semibold">
                                            Sing Up
                                        </span>
                                    </DangerButton>
                                <Link href={route("login")}>
                                    <DangerButton className="border border-white py-[13px] text-center">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </DangerButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
    
}