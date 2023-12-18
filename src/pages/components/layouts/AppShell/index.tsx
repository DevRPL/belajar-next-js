import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
};

const APpShell = (props: AppShellProps) => {
    const {children} = props;
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}

export default APpShell;