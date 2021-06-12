import React, { useEffect, useState } from 'react';
import {
    IconButton,
    Select,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    InputLabel,
    MenuItem,
    Switch,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const IncidenteTable = () => {
    const [form, setForm] = useState({
        titulo: '',
        descricao: '',
        criticidade: '',
        tipo: '',
        status: false,
    });

    // useEffect(() => {
    //     console.log('Form: ', form);
    // }, [form]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('a');
        console.log(form);
        fetch('/api/incidente/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
            // body: form,
        })
            .then((response) => {
                setForm({
                    titulo: '',
                    descricao: '',
                    criticidade: '',
                    tipo: '',
                    status: false,
                });
                //Mensagem sucesso
                return response.json();
            })
            .catch((error) => {
                console.log('error: ', error);
            });
        console.log('b');
    }

    function handleChange({ target }) {
        const { name, value } = target;
        switch (name) {
            case 'status':
                setForm({ ...form, status: !form.status });
                break;

            default:
                setForm({ ...form, [name]: value });
                break;
        }
    }

    //create
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     alert('Form Submit');
    // }
    // //read
    // function readIncidente() {
    //     return null;
    // }

    // //update
    // function updateIncidente() {
    //     return null;
    // }

    // //delete
    // function deleteIncidente() {
    //     return null;
    // }

    return (
        <form>
            <Table onSubmit={handleSubmit}>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField
                                name="titulo"
                                onChange={handleChange}
                                label="Título"
                                fullWidth={true}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                                name="descricao"
                                onChange={handleChange}
                                label="Descrição"
                                fullWidth={true}
                                rows="3"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <InputLabel>Criticidade</InputLabel>
                            <Select
                                name="criticidade"
                                value={form.criticidade}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Selecione
                                </MenuItem>
                                <MenuItem value={'baixa'}>Baixa</MenuItem>
                                <MenuItem value={'média'}>Média</MenuItem>
                                <MenuItem value={'alta'}>Alta</MenuItem>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <InputLabel>Tipo</InputLabel>
                            <Select
                                name="tipo"
                                value={form.tipo}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Selecione
                                </MenuItem>
                                <MenuItem value={'alarme'}>Alarme</MenuItem>
                                <MenuItem value={'incidente'}>
                                    Incidente
                                </MenuItem>
                                <MenuItem value={'outros'}>Outros</MenuItem>
                            </Select>
                        </TableCell>
                        <TableCell>
                            <InputLabel>Status</InputLabel>
                            <Switch
                                name="status"
                                checked={form.status}
                                onChange={handleChange}
                                color="primary"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <IconButton onClick={handleSubmit}>
                                <AddCircleIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </form>
    );
};

export default IncidenteTable;
