"use client"

interface inputProps {
    name: string,
    type: string,
    placeholder: string,
    onChange: any,
    value: string | number,
    validate: string | null
}

const Input = (props: inputProps) => {
    const { name, type, placeholder, onChange, validate } = props
    return (
        <div>
            <input
                id={name}
                type={type}
                className="border px-3 py-2 rounded-xl w-full"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onChange}
            />
            <p className="text-red-500">{validate}</p>
        </div>
    )
}

export default Input