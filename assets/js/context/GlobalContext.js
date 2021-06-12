import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(true);
    const [reg, setReg] = useState(0);
    const [sucesso, setSucesso] = useState(false);
    const [isSucessEdited, setIsSucessEdited] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        id: '',
        titulo: '',
        descricao: '',
        criticidade: '',
        tipo: '',
        status: false,
    });

    function limparForm() {
        setForm({
            titulo: '',
            descricao: '',
            criticidade: '',
            tipo: '',
            status: false,
        });
    }

    //Load Data
    const getValue = async () => {
        setIsLoading(true);
        const { data } = await axios('/api/incidente/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setRows(data.data);
        setReg(data.data.length);
        setIsSucessEdited(false);
        setIsLoading(false);
    };

    useEffect(() => {
        getValue();
        setEditMode(false);
    }, []);

    //update
    function updateIncidente(entity) {
        if (editMode) {
            limparForm();
        } else {
            setForm(entity);
        }
        setEditMode(!editMode);
    }

    //delete
    function deleteIncidente(incidenteId) {
        const getDelet = async () => {
            const { data } = await axios('/api/incidente/' + incidenteId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            await getValue();
        };
        getDelet();
    }

    return (
        <GlobalContext.Provider
            value={{
                rows,
                setRows,
                open,
                setOpen,
                reg,
                deleteIncidente,
                getValue,
                sucesso,
                setSucesso,
                updateIncidente,
                form,
                setForm,
                editMode,
                setEditMode,
                isSucessEdited,
                setIsSucessEdited,
                isLoading,
                setIsLoading,
                limparForm,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
