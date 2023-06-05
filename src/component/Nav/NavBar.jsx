import '../Nav/NavBar.css'
export const NavBar = ()=>{
    const elements = [
        'HOME',
        'PERFUMES',
        'MAQUIAGENS',
      ];

    return (

        <nav>
            <ul>
                {elements.map((element, index) => (
                <li key={index}>
                    <a href={element}>{element}</a>
                </li>
                ))}
            </ul>
    </nav>
     
    );
}