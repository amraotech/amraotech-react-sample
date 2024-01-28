import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

const handleProfileRedirrect = () =>{
  navigate('/dashboard/profile');
}

const handleJobOffersRedirect = () => {
  navigate('/dashboard/job-offers')
}

const handlePaymentDetailsRedirect = () => {
  navigate('/dashboard/payment-details')
}

const handleMyTeamsRedirect = () => {
  navigate('/dashboard/my-teams')
}

const handleWebsitesRedirect = () => {
  navigate('/dashboard/websites')
}





  return (
    <div className="flex h-screen bg-gray-100 container gap-11">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64">
        {/* Sidebar Content */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4 mx-auto text-right">amraowTech</h3>
          {/* Add sidebar navigation links or components */}
          <div className='ml-10 text-center flex flex-col gap-7 my-48 h-full'>
            <div><button onClick={() => handleProfileRedirrect('/dashboard/profile')} className='bg-dark/20 w-48 py-2'>PROFILE</button></div>
            <div><button onClick={() => handleJobOffersRedirect('/dashboard/job-offers')} className='bg-dark/20 w-48 py-2'>JOB OFFERS</button></div>
            <div><button onClick={() => handlePaymentDetailsRedirect('/dashboard/payment-details')} className='bg-dark/20 w-48 py-2'>PAYMENT DETAILS</button></div>
            <div><button onClick={() => handleMyTeamsRedirect('/dashboard/my-teams')} className='bg-dark/20 w-48 py-2'>MY TEAMS</button></div>
            <div><button onClick={() => handleWebsitesRedirect('/dashboard/websites')} className='bg-dark/20 w-48 py-2'>WEBSITE</button></div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        {/* Hamburger Menu (if needed) */}
        {/* Have to Add a button or icon to toggle the sidebar visibility */}
        
        {/* Page Content */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-4 text-center">NavBar  </h3>
           
        </div>
        <div className='bg-dark/20 p-4'>
        <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
