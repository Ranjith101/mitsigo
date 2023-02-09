import React from "react";

function Users() {
  const profile = [
    { name: "Drew James", country: "USA", mobile: 8715674877 },
    { name: "Bawid Kames", country: "USA", mobile: 8715674877 },
    { name: "Lavid Emes", country: "USA", mobile: 8715674877 },
  ];
  return (
    <div>
      {profile.map((u) => {
        return (
          <div key={u}>
            {u.name}
            {u.country}
          </div>
        );
      })}
    </div>
  );
}

export default Users;
