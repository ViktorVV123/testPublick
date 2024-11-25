
import React, { useState } from 'react';
import styles from "../TableMain/TableMain.module.css";

interface RowData {
    date: string;
    shipment: string;
    railRoad: string;
    pipe: number;
    mnpp: string;
    water: string;
    emissions: string;
    production: string;
    remainingFirst: string;
    capacity: string;
    unprocessedShipment: string;
}

interface TableProps {
    data: RowData[];
    // Добавьте сюда функцию для обновления данных, если нужно
    // onDataUpdate?: (newData: RowData[]) => void;
}

export const Table: React.FC<TableProps> = ({ data }) => {
    // Состояние для хранения текущих данных таблицы
    const [tableData, setTableData] = useState<RowData[]>(data);

    // Состояние для отслеживания редактируемой ячейки
    const [editCell, setEditCell] = useState<{ rowIndex: number; key: keyof RowData } | null>(null);

    // Обработчик двойного клика по ячейке
    const handleDoubleClick = (rowIndex: number, key: keyof RowData) => {
        setEditCell({ rowIndex, key });
    };

    // Обработчик изменения значения в поле ввода
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number, key: keyof RowData) => {
        const newValue = e.target.value;
        setTableData(prevData => {
            const updatedData = [...prevData];
            // Преобразуем значение в нужный тип, если необходимо
            if (typeof updatedData[rowIndex][key] === 'number') {
                // @ts-ignore
                updatedData[rowIndex][key] = Number(newValue) as any;
            } else {
                // @ts-ignore
                updatedData[rowIndex][key] = newValue as any;
            }
            return updatedData;
        });
    };

    // Обработчик потери фокуса или нажатия Enter для завершения редактирования
    const handleBlur = () => {
        setEditCell(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditCell(null);
        }
    };

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
                {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.keys(row).map((key) => {
                            const cellKey = key as keyof RowData;
                            const isEditable = editCell?.rowIndex === rowIndex && editCell.key === cellKey;
                            const cellValue = row[cellKey];

                            // Определение стилей для определённых ячеек
                            let cellStyle = {};
                            if (cellKey === 'railRoad' || cellKey === 'pipe' || cellKey === 'mnpp') {
                                cellStyle = { backgroundColor: 'rgba(234,60,60,0.22)' };
                            } else if (cellKey === 'water') {
                                cellStyle = { backgroundColor: 'rgba(108,193,58,0.18)' };
                            } else if (cellKey === 'emissions') {
                                cellStyle = { backgroundColor: 'rgba(52,121,213,0.22)' };
                            }

                            return (
                                <td
                                    className={styles.tdST}
                                    key={cellKey}
                                    style={cellStyle}
                                    onDoubleClick={() => handleDoubleClick(rowIndex, cellKey)}
                                >
                                    {isEditable ? (
                                        <input
                                            width={20}
                                            type="text"
                                            value={cellValue}
                                            onChange={(e) => handleChange(e, rowIndex, cellKey)}
                                            onBlur={handleBlur}
                                            onKeyDown={handleKeyDown}
                                            autoFocus
                                            style={{ width: '100%' }}
                                        />
                                    ) : (
                                        cellValue
                                    )}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>

    );
};
