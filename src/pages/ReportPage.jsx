import React, {useEffect, useState} from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import {fetchReport} from "../utils/api/fetchReport.js";

export const ReportPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportData, setReportData] = useState([]);
    const [summary, setSummary] = useState({});

    const getSummary = () => {
        const totalCalls = reportData.length;
        const missedCalls = reportData.filter(call => call.missed).length;
        const totalDuration = reportData.reduce((acc, call) => {
            if (call.duration) {
                const [minutes, seconds] = call.duration.split(' мин ').map(Number);
                return acc + (minutes * 60 + (seconds ? seconds.split(' сек')[0] : 0));
            }
            return acc;
        }, 0);

        const hours = Math.floor(totalDuration / 3600);
        const minutes = Math.floor((totalDuration % 3600) / 60);
        const seconds = totalDuration % 60;

        const data = { totalCalls, missedCalls, totalDuration: `${hours} ч ${minutes} мин ${seconds} сек` };

        setSummary(data);
    };

    const handleGenerateReport = async () => {
        const data = await fetchReport();

        const filteredData = data.filter(item => {
            const itemDate = new Date(item.date);
            const isStartDateValid = startDate ? itemDate >= new Date(startDate) : true;
            const isEndDateValid = endDate ? itemDate <= new Date(endDate) : true;

            return isStartDateValid && isEndDateValid;
        });

        setReportData(filteredData);
    };

    useEffect(() => {
        if (reportData.length > 0) {
            getSummary();
        }
    }, [reportData]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Отчет по звонкам
            </Typography>
            <TextField
                type="date"
                label="Начальная дата"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                type="date"
                label="Конечная дата"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleGenerateReport}>
                Сгенерировать отчет
            </Button>

            {reportData.length > 0 && (
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ФИО менеджера</TableCell>
                                <TableCell>Статус</TableCell>
                                <TableCell>Продолжительность</TableCell>
                                <TableCell>Дата</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reportData.map((call, index) => (
                                <TableRow key={index}>
                                    <TableCell>{call.managerName}</TableCell>
                                    <TableCell>{call.missed ? <span style={{color:"green"}}>Отвечен</span> : <span style={{color:"red"}}>Пропущен</span>}</TableCell>
                                    <TableCell>{call.duration}</TableCell>
                                    <TableCell>{call.date}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell><strong>Итого:</strong></TableCell>
                                <TableCell>{summary.totalCalls} (из них пропущенных: {summary.missedCalls})</TableCell>
                                <TableCell><strong>Общая продолжительность:</strong> {summary.totalDuration}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
};

