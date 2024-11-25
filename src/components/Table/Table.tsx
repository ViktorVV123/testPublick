import React from 'react';
import styles from "../TableMain/TableMain.module.css";

export const Table = ({data}: any) => {
    return (

            <table className={styles.dataTable}>
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Отгрузка</th>
                    <th>Ж/Д</th>
                    <th>Труба</th>
                    <th>МНПП</th>
                    <th>Вода</th>
                    <th>Выроботка</th>
                    <th>Остатки (товар*компонент)</th>
                    <th>Остатки (паспорт)</th>
                    <th>Своб. емкость</th>
                    <th>Неоформл. отгрузка</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row: any, index: number) => (
                    <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.shipment}</td>
                        <td style={{backgroundColor: 'rgba(234,60,60,0.22)'}}>{row.railRoad}</td>
                        <td style={{backgroundColor: 'rgba(234,60,60,0.22)'}}>
                            {row.pipe === 0 ? '' : row.pipe}
                        </td>
                        <td style={{backgroundColor: 'rgba(234,60,60,0.22)'}}>{row.mnpp}</td>
                        <td style={{backgroundColor: 'rgba(108,193,58,0.18)'}}>{row.water}</td>
                        <td style={{backgroundColor: 'rgba(52,121,213,0.22)'}}>{row.emissions}</td>
                        <td>{row.production}</td>
                        <td>{row.remainingFirst}</td>
                        <td>{row.capacity}</td>
                        <td>{row.unprocessedShipment}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    );
};

