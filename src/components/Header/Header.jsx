import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center mx-10 mt-4'>
             <h1 className='text-4xl font-semibold'>Knowledge cafe</h1>
             <img src={profile} alt=""  />
        </header>
    );
};

export default Header;