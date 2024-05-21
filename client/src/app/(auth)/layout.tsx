const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex justify-center min-h-screen items-center bg-slate-200">
            {children}
        </section>
    )
}

export default layout