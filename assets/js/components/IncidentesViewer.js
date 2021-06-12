import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Tooltip,
} from '@material-ui/core';
import { GlobalContext } from '../context/GlobalContext';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function IncidenteViewer() {
    const classes = useStyles();
    const global = useContext(GlobalContext);

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
                    {global.rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {row.titulo}
                            </TableCell>
                            <TableCell align="right">{row.descricao}</TableCell>
                            <TableCell align="right">
                                {row.criticidade}
                            </TableCell>
                            <TableCell align="right">{row.tipo}</TableCell>
                            <TableCell align="right">
                                {row.status ? (
                                    <CheckBoxRoundedIcon />
                                ) : (
                                    <CheckBoxOutlineBlankRoundedIcon />
                                )}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton>
                                    {global.form.id === row.id ? (
                                        <Tooltip
                                            title="Cancelar"
                                            aria-label="Cancelar"
                                        >
                                            <ClearIcon
                                                onClick={() => {
                                                    global.updateIncidente(row);
                                                }}
                                            />
                                        </Tooltip>
                                    ) : (
                                        <Tooltip
                                            title="Editar"
                                            aria-label="Edit"
                                        >
                                            <EditIcon
                                                onClick={() => {
                                                    global.updateIncidente(row);
                                                }}
                                            />
                                        </Tooltip>
                                    )}
                                </IconButton>
                                <IconButton>
                                    <Tooltip title="Delete" aria-label="Delet">
                                        <DeleteIcon
                                            onClick={() => {
                                                window.confirm(
                                                    'Confirmar exclusão?',
                                                ) &&
                                                    global.deleteIncidente(
                                                        row.id,
                                                    );
                                            }}
                                        />
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
