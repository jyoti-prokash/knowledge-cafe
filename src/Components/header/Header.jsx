import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='md flex justify-between items-center border-b-2 my-2 py-5'>
            <div>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            </div>
            <div>
                    <img src={profile} alt=""/>
            </div>
        </div>
    );
};

export default Header;