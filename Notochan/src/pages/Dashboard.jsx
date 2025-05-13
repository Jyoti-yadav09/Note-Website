import HeaderLoggedIn from '../components/HeaderLoggedIn';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  };

  return (
    <div>
      <HeaderLoggedIn onLogout={handleLogout} />
      {/* Dashboard content */}
    </div>
  );
};

export default Dashboard;
