import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import User from '../../components/User/User';
import Account from '../../components/Account/Account';

function Profile() {
  const token = useSelector((state) => state.auth.token); 
  const navigate = useNavigate(); 

  useEffect(() => {
    

    if (!token) {
      navigate('/login'); 
    }
  }, [token, navigate]);

  return (
    <div className="main bg-dark">
      <User />
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </div>
  );
}

export default Profile;
