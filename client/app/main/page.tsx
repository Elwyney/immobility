'use client';
import { useState } from 'react';
import GenderOptions from '../components/gender';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { sendUserQuery } from '../redux/slice';
import './style.scss';
interface GenderOption {
    id: number;
    title: string;
    gender: string | null;
    genderSelection: string[];
}

const Main = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [name, setName] = useState<string>('');
    const [selectedGenders, setSelectedGenders] = useState<GenderOption[]>([
        { id: 1, title: 'Ваш пол', gender: null, genderSelection: ['М', 'Ж'] },
        { id: 2, title: 'Пол собеседника', gender: null, genderSelection: ['М', 'Ж'] }
    ]);

    // Обработка выбора пола
    const handleGenderSelect = (id: number, selectedGender: string) => {
        setSelectedGenders(prev =>
            prev.map(option => option.id === id ? { ...option, gender: selectedGender } : option)
        );
    };

    // Инициация поиска
    const initiateSearch = () => {
        if (!name.trim()) {
            alert('Введите ваше имя.');
            return;
        }

        if (selectedGenders.some(option => !option.gender)) {
            alert('Выберите все параметры пола.');
            return;
        }

        dispatch(sendUserQuery({
            localName: name,
            OwnGender: selectedGenders[0].gender || null,
            PartnerGender: selectedGenders[1].gender || null
        }));

        router.push('/loader');
    };

    return (
        <main className="main-content">
            <div className="container">
                <div className='container'>
                    <div className="intro-section">
                        <h1>
                            В нашем мире анонимных знакомств каждое лицо - загадка, каждый человек - история.
                        </h1>
                        <span>
                            Помните, ответственность за вашу безопасность лежит на вас. Не передавайте личные данные и будьте осторожны.
                        </span>
                    </div>
                </div>
                <form className="search-form" onSubmit={(e) => { e.preventDefault(); initiateSearch(); }}>
                    <div className="form-section">
                        {selectedGenders.map(option => (
                            <GenderOptions
                                key={option.id}
                                id={option.id}
                                title={option.title}
                                genderSelection={option.genderSelection}
                                onGenderSelect={handleGenderSelect}
                            />
                        ))}
                    </div>
                    <div className='search-name'>
                        <span className="gender-label">Ваше имя</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-input"
                            placeholder="Ваше имя"
                        />
                    </div>
                    <input
                        type="button"
                        onClick={initiateSearch}
                        value="Поиск"
                        className="search-button"
                    />
                </form>
            </div>
        </main>
    );
};

export default Main;
