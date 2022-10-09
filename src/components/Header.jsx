// components/Header.jsx

function Header({ title = 'Título por defecto' }) {
    return (
        <h2 className="header">{title}</h2>
    );
}

export default Header;