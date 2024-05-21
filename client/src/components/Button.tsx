"use client"

type btn = {
    cn: string,
    title: string
    type: 'submit' | 'button' | 'reset'
}

const Button = (props: btn) => {
    const { cn, title, type } = props
    return (
        <button
            type={type}
            className={`${cn} border rounded-xl text-white hover:bg-opacity-85 transition-all`}>
            {title}
        </button>
    )
}

export default Button