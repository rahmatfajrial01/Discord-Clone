interface authFormProps {
    children: React.ReactNode
    title: string,
    onSubmit: any
}

const AuthForm = ({ children, title, onSubmit }: authFormProps) => {
    return (
        <form onSubmit={onSubmit} className='flex flex-col gap-5 border p-5 rounded-xl w-96 bg-white'>
            <h1 className='font-semibold text-center text-2xl'>{title}</h1>
            {children}
        </form>
    )
}

export default AuthForm