import React from 'react';
import '../css/home.css';
import logoMosh from '../assets/mosh.png';
import pix from '../assets/pix.png';

export const Home: React.FC = () => {

    return (
        <div className="dashboard-wrapper">
            <aside className="sidebar">
                <div className="logo"><img src={logoMosh} alt="Logo" className="logo" /></div>
                <nav className="menu">
                    {/* Em React, tags "a" vazias com href="#" geralmente são trocadas por <Link> do router ou botões */}
                    <a href="#dashboard" className="active">Dashboard</a>
                    <a href="#tables">Tables</a>
                    <a href="#billing">Billing</a>
                    <a href="#rtl">RTL</a>
                </nav>
            </aside>

            <main className="main-content">
                <header className="top-bar">
                    <div className="breadcrumbs">Pages / Billing</div>
                    <div className="search-bar">
                        <input type="text" placeholder="Type here..." />
                    </div>
                </header>

                <div className="grid-content">
                    {/* Cartão de Crédito */}
                    <div className="card card-credit">
                        <div className="card-credit-header">
                            <span className="card-title">MoshPit</span>
                            <div className="card-chip-icon"><div className="chip-line"></div></div>
                        </div>
                        <div className="card-number">7812 2139 0823 XXXX</div>
                        <div className="card-credit-footer">
                            <div className="card-info">
                                <span className="info-label">VALID THRU</span>
                                <span className="info-value">05/24</span>
                            </div>
                            <div className="card-info">
                                <span className="info-label">CVV</span>
                                <span className="info-value">09X</span>
                            </div>
                            <div className="card-logo-master">
                                <div className="circle circle-left"></div>
                                <div className="circle circle-right"></div>
                            </div>
                        </div>
                    </div>

                    {/* Cartão Salário */}
                    <div className="card card-small">
                        <div className="card-icon-salary-box bg-green">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                <path d="M11.5 1L2 6v2h19V6L11.5 1zm-7 9v7h3v-7h-3zm5.5 0v7h3v-7h-3zm5.5 0v7h3v-7h-3zM2 18v2h19v-2H2z" />
                            </svg>
                        </div>
                        <div className="card-small-info">
                            <span className="card-small-title">Salary</span>
                            <span className="card-small-subtitle">Belong Interactive</span>
                            <div className="divider"></div>
                            <span className="card-small-value">+R$2,000</span>
                        </div>
                    </div>

                    {/* Cartão Pix */}
                    <div className="card card-small">
                        <div className="card-icon-box bg-pix">
                            <img src={pix} alt="Pix" className="icon-img" />
                        </div>
                        <div className="card-small-info">
                            <span className="card-small-title">Pix</span>
                            <span className="card-small-subtitle">Freelance Payment</span>
                            <div className="divider"></div>
                            <span className="card-small-value">R$ 455,00</span>
                        </div>
                    </div>
                </div>

                <div className="bottom-content">
                    <div className="card billing-card">
                        <h3 className="billing-title">Billing Information</h3>
                        <div className="billing-list">
                            
                            <div className="billing-item">
                                <div className="billing-info">
                                    <span className="billing-name">Maria Clara</span>
                                    <span className="billing-company">Company Name: K/TEC</span>
                                    <span className="billing-email">Email Address: clara@ktec.com</span>
                                    <span className="billing-vat">VAT Number: FRB34567891</span>
                                </div>
                                <div className="billing-actions">
                                    <button className="btn-delete">Delete</button>
                                    <button className="btn-edit">Edit</button>
                                </div>
                            </div>

                            <div className="billing-item">
                                <div className="billing-info">
                                    <span className="billing-name">Arthur Gael</span>
                                    <span className="billing-company">Company Name: Star Vortex</span>
                                    <span className="billing-email">Email Address: arael@dream.com</span>
                                    <span className="billing-vat">VAT Number: FRB12354769</span>
                                </div>
                                <div className="billing-actions">
                                    <button className="btn-delete">Delete</button>
                                    <button className="btn-edit">Edit</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};