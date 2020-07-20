import React from 'react';
const AdminPage = () => {
  const cardContent = `这个页面只有admin角色才可以访问，guest和editor角色看不到`
  return ( 
    <div className="app-container">
      {cardContent}
    </div>
  );
}
 
export default AdminPage;