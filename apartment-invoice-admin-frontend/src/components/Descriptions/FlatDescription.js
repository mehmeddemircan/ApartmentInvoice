import React, { Fragment } from 'react';
import { Descriptions } from 'antd';

const FlatDescription = ({item}) => {
    return (
        <div className="container p-0">
        <h3 className="text-xl font-semibold">Daire Bilgileri</h3>
        <div className="grid grid-cols-1">
          <p><strong>Daire No :</strong> {item.flatNo}</p>
          <p><strong>Kat Sayısı : </strong>{item.floor}</p>
          <p><strong>Genişlik : </strong>{item.numberOfRooms}</p>
          <p><strong>Boş mu : </strong>{item.isEmpty ? "Boş" : "Dolu"}</p>
         {item.userId != null &&  <p><strong>Kullanici : </strong>{item.email}</p>}
        </div>
      </div>
    )
}
export default FlatDescription;