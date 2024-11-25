import React from 'react';
import styles from './TableTwo.module.css';
import { TableRow } from "../../assets/data/table";

type tableTwoType = {
    table: TableRow[];
    closeTable: () => void;
};

export const TableTwo = ({ table, closeTable }: tableTwoType) => {
    return (
        <div className={styles.modalOverlay} onClick={closeTable}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()} // Остановить всплытие события для предотвращения закрытия при клике на содержимое
            >
                <div className={styles.modalHeader}>
                    <h2>Инфраструктурные ограничения</h2>
                    <div onClick={closeTable} className={styles.closeButton}>
                        &times;
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.dataTable}>
                        <thead>
                        <tr>
                            <th rowSpan={2}>Дата</th>
                            <th colSpan={4}>Всего в/ц</th>
                            <th colSpan={4}>Газовые в/ц</th>
                            <th colSpan={4}>Светлые в/ц</th>
                            <th colSpan={4}>Темные в/ц</th>
                        </tr>
                        <tr>
                            <th>Потребность</th>
                            <th>Прогноз</th>
                            <th>Факт отгрузки</th>
                            <th>Освоение</th>
                            <th>Потребность</th>
                            <th>Прогноз</th>
                            <th>Факт отгрузки</th>
                            <th>Освоение</th>
                            <th>Потребность</th>
                            <th>Прогноз</th>
                            <th>Факт отгрузки</th>
                            <th>Освоение</th>
                            <th>Потребность</th>
                            <th>Прогноз</th>
                            <th>Факт отгрузки</th>
                            <th>Освоение</th>
                        </tr>
                        </thead>
                        <tbody>
                        {table.map((row: TableRow, index) => (
                            <tr key={index}>
                                <td>{row.date}</td>
                                <td>{row.totalDemand}</td>
                                <td>{row.totalForecast}</td>
                                <td className={row.totalShipment < 0 ? styles.negative : ''}>
                                    {row.totalShipment}
                                </td>
                                <td>{row.totalMastery}</td>
                                <td>{row.gasDemand}</td>
                                <td>{row.gasForecast}</td>
                                <td>{row.gasShipment}</td>
                                <td>{row.gasMastery}</td>
                                <td>{row.lightDemand}</td>
                                <td>{row.lightForecast}</td>
                                <td className={row.lightShipment < 0 ? styles.negative : ''}>
                                    {row.lightShipment}
                                </td>
                                <td>{row.lightMastery}</td>
                                <td>{row.darkDemand}</td>
                                <td>{row.darkForecast}</td>
                                <td>{row.darkShipment}</td>
                                <td>{row.darkMastery}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
