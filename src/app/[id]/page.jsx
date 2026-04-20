import React from "react";

const FriendsDetails = async ({ params }) => {
  const p = await params;
  console.log(p);
  return (
    <div>
      <h2>this is friends details page</h2>
    </div>
  );
};

export default FriendsDetails;
