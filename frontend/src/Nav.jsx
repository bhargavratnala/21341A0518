function Nav(props){
    return (
        <nav>
            <ul className="companyList">
                <li onClick={ () => {props.setCompany('AMZ')} }>AMAZON</li>
                <li onClick={ () => {props.setCompany('FLP')} }>FLIPKART</li>
                <li onClick={ () => {props.setCompany('SNP')} }>SNAPDEAL</li>
                <li onClick={ () => {props.setCompany('MYN')} }>MYNTRA</li>
                <li onClick={ () => {props.setCompany('AZO')} }>AJIO</li>
            </ul>
            <ul className="productList">
                <li onClick={ () => {props.setCategory('Phone')} }>Phone</li>
                <li onClick={ () => {props.setCategory('Computer')} }>Computer</li>
                <li onClick={ () => {props.setCategory('TV')} }>TV</li>
                <li onClick={ () => {props.setCategory('Earphone')} }>Earphone</li>
                <li onClick={ () => {props.setCategory('Tablet')} }>Tablet</li>
                <li onClick={ () => {props.setCategory('Charger')} }>Charger</li>
                <li onClick={ () => {props.setCategory('Mouse')} }>Mouse</li>
                <li onClick={ () => {props.setCategory('Keypad')} }>Keypad</li>
                <li onClick={ () => {props.setCategory('Bluetooth')} }>Bluetooth</li>
                <li onClick={ () => {props.setCategory('Pendrive')} }>Pendrive</li>
                <li onClick={ () => {props.setCategory('Remote')} }>Remote</li>
                <li onClick={ () => {props.setCategory('Speaker')} }>Speaker</li>
                <li onClick={ () => {props.setCategory('Headset')} }>Headset</li>
                <li onClick={ () => {props.setCategory('Laptop')} }>Laptop</li>
                <li onClick={ () => {props.setCategory('PC')} }>PC</li>
            </ul>
        </nav>
    )
};

export default Nav;