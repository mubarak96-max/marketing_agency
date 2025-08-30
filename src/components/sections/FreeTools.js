'use client';

import React, { useState } from 'react';
import { Search, Globe, Share2, Calculator, Award, Download, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';

const FreeTools = () => {
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [auditResults, setAuditResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedTool, setSelectedTool] = useState('audit');

    // Simulate website audit
    const runWebsiteAudit = async () => {
        if (!websiteUrl) return;

        setLoading(true);
        // Simulate API call delay
        setTimeout(() => {
            const mockResults = {
                score: Math.floor(Math.random() * 30) + 70, // 70-100
                performance: Math.floor(Math.random() * 30) + 70,
                seo: Math.floor(Math.random() * 30) + 60,
                accessibility: Math.floor(Math.random() * 20) + 80,
                bestPractices: Math.floor(Math.random() * 20) + 75,
                issues: [
                    'Optimize images for faster loading',
                    'Add missing alt tags for images',
                    'Improve meta descriptions',
                    'Fix mobile responsiveness issues'
                ],
                improvements: [
                    'Implement lazy loading for images',
                    'Compress CSS and JavaScript files',
                    'Add structured data markup',
                    'Optimize for Core Web Vitals'
                ]
            };
            setAuditResults(mockResults);
            setLoading(false);
        }, 2000);
    };

    const tools = [
        {
            id: 'audit',
            title: 'Website Performance Audit',
            description: 'Get a comprehensive analysis of your website\'s performance, SEO, and user experience.',
            icon: Globe,
            color: 'bg-blue-500'
        },
        {
            id: 'seo',
            title: 'SEO Checker',
            description: 'Analyze your website\'s SEO performance and get actionable recommendations.',
            icon: Search,
            color: 'bg-green-500'
        },
        {
            id: 'social',
            title: 'Social Media ROI Calculator',
            description: 'Calculate the return on investment for your social media marketing campaigns.',
            icon: Share2,
            color: 'bg-purple-500'
        },
        {
            id: 'health',
            title: 'Website Health Score',
            description: 'Get an overall health score for your website with improvement suggestions.',
            icon: Award,
            color: 'bg-orange-500'
        }
    ];

    const renderAuditTool = () => (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <Input
                    type="url"
                    placeholder="Enter your website URL (e.g., https://yourwebsite.com)"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="flex-1"
                />
                <Button
                    onClick={runWebsiteAudit}
                    disabled={loading || !websiteUrl}
                    className="sm:w-auto"
                >
                    {loading ? 'Analyzing...' : 'Run Audit'}
                </Button>
            </div>

            {loading && (
                <Card className="p-6 text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-dubai-gold border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Analyzing your website...</p>
                </Card>
            )}

            {auditResults && !loading && (
                <Card className="p-6">
                    <h3 className="text-xl font-bold text-text-on-light mb-6">Audit Results</h3>

                    {/* Overall Score */}
                    <div className="text-center mb-8">
                        <div className="relative w-32 h-32 mx-auto">
                            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    stroke="#e5e7eb"
                                    strokeWidth="8"
                                    fill="none"
                                />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    stroke="#1ba9ba"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray={`${(auditResults.score / 100) * 314} 314`}
                                    className="transition-all duration-1000"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold text-text-on-light">{auditResults.score}</span>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-text-on-light mt-2">Overall Score</p>
                    </div>

                    {/* Detailed Scores */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Performance', value: auditResults.performance },
                            { label: 'SEO', value: auditResults.seo },
                            { label: 'Accessibility', value: auditResults.accessibility },
                            { label: 'Best Practices', value: auditResults.bestPractices }
                        ].map((metric) => (
                            <div key={metric.label} className="text-center">
                                <div className={`text-2xl font-bold ${metric.value >= 80 ? 'text-green-600' : metric.value >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                                    {metric.value}
                                </div>
                                <div className="text-sm text-gray-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Issues and Improvements */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-red-600 mb-3">Issues Found</h4>
                            <ul className="space-y-2">
                                {auditResults.issues.map((issue, index) => (
                                    <li key={index} className="text-sm text-gray-600 flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        {issue}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-600 mb-3">Improvements</h4>
                            <ul className="space-y-2">
                                {auditResults.improvements.map((improvement, index) => (
                                    <li key={index} className="text-sm text-gray-600 flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        {improvement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <Button variant="primary">
                            Get Professional Audit Report
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );

    const renderSEOChecker = () => (
        <Card className="p-6 text-center">
            <Search className="w-12 h-12 text-dubai-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-dubai-dark mb-4">SEO Checker</h3>
            <p className="text-gray-600 mb-6">
                Analyze your website's SEO performance with our comprehensive checker.
            </p>
            <Button variant="outline">Coming Soon</Button>
        </Card>
    );

    const renderROICalculator = () => (
        <Card className="p-6">
            <h3 className="text-xl font-bold text-dubai-dark mb-6">Social Media ROI Calculator</h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <Input type="number" placeholder="Monthly Ad Spend (AED)" />
                    <Input type="number" placeholder="Conversions per Month" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Input type="number" placeholder="Average Order Value (AED)" />
                    <Input type="number" placeholder="Conversion Rate (%)" />
                </div>
                <Button variant="primary" className="w-full">
                    Calculate ROI
                </Button>
            </div>
        </Card>
    );

    const renderHealthScore = () => (
        <Card className="p-6 text-center">
            <Award className="w-12 h-12 text-dubai-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-dubai-dark mb-4">Website Health Score</h3>
            <p className="text-gray-600 mb-6">
                Get a comprehensive health score for your website with actionable insights.
            </p>
            <Button variant="outline">Coming Soon</Button>
        </Card>
    );

    const renderToolContent = () => {
        switch (selectedTool) {
            case 'audit':
                return renderAuditTool();
            case 'seo':
                return renderSEOChecker();
            case 'social':
                return renderROICalculator();
            case 'health':
                return renderHealthScore();
            default:
                return renderAuditTool();
        }
    };

    return (
        <section className="py-20 bg-section-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-on-light mb-4">
                        Free Tools & Resources
                    </h2>
                    <p className="text-lg text-text-muted-light max-w-2xl mx-auto">
                        Analyze and improve your digital presence with our free professional tools
                    </p>
                </div>

                {/* Tool Selection */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                    {tools.map((tool) => {
                        const Icon = tool.icon;
                        return (
                            <Card
                                key={tool.id}
                                className={`p-4 cursor-pointer transition-all duration-300 ${selectedTool === tool.id
                                    ? 'border-dubai-gold bg-dubai-gold/5'
                                    : 'hover:border-dubai-light'
                                    }`}
                                onClick={() => setSelectedTool(tool.id)}
                            >
                                <div className={`w-10 h-10 ${tool.color} rounded-lg flex items-center justify-center mb-3`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-semibold text-dubai-dark mb-2">{tool.title}</h3>
                                <p className="text-sm text-gray-600">{tool.description}</p>
                            </Card>
                        );
                    })}
                </div>

                {/* Tool Content */}
                <div className="mb-12">
                    {renderToolContent()}
                </div>

                {/* Downloadable Resources */}
                <Card className="p-8 bg-gradient-to-r from-dubai-light to-dubai-accent text-white">
                    <div className="text-center">
                        <Download className="w-12 h-12 text-dubai-gold mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                            Download Our Complete Digital Marketing Guide
                        </h3>
                        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                            Get our comprehensive guide to digital marketing in the UAE,
                            including templates, checklists, and expert strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                            />
                            <Button variant="primary" className="bg-dubai-gold hover:bg-dubai-gold/90">
                                Download Free
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default FreeTools;
