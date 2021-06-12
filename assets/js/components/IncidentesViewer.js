import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Switch,
    Tooltip,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// function createData(titulo, descricao, criticidade, tipo, status) {
//     return { titulo, descricao, criticidade, tipo, status };
// }

// const rows = [
//     createData('Alarme 01', 'Durante a noite', 'baixa', 'Alarme', true),
//     createData('Alarme 02', 'Durante a noite', 'baixa', 'Alarme', false),
//     createData('Portao', 'Meio dia', 'Alta', 'Outro', false),
// ];

export default function IncidenteViewer() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const getValue = async () => {
        const { data } = await axios('/api/incidente/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(data);
        setRows(data.data);
    };

    useEffect(() => {
        getValue();
    }, []);

    return (
        <TableContainer>
            <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell align="right">Descrição</TableCell>
                        <TableCell align="right">Criticidade</TableCell>
                        <TableCell align="right">Tipo</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.titulo}>
                            <TableCell component="th" scope="row">
                                {row.titulo}
                            </TableCell>
                            <TableCell align="right">{row.descricao}</TableCell>
                            <TableCell align="right">
                                {row.criticidade}
                            </TableCell>
                            <TableCell align="right">{row.tipo}</TableCell>
                            <TableCell align="right">
                                <Switch checked={row.status} color="primary" />
                            </TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    <Tooltip title="Editar" aria-label="Edit">
                                        <EditIcon />
                                    </Tooltip>
                                </IconButton>
                                <IconButton>
                                    <Tooltip title="Delete" aria-label="Delet">
                                        <DeleteIcon />
                                    </Tooltip>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
