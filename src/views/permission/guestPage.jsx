import React from 'react';
const GuestPage = () => {
  const cardContent = `这个页面只有admin和guest角色才可以访问，editor角色看不到`
  return (
    <div className="app-container">
      {cardContent}
    </div>
  );
}

export default GuestPage;