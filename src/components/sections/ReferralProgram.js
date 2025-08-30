'use client';

import React, { useState } from 'react';
import { Gift, Users, Star, ArrowRight, Copy, Check, Trophy } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';

const ReferralProgram = () => {
    const [userEmail, setUserEmail] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [copied, setCopied] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const generateReferralCode = () => {
        const code = 'NEXUS' + Math.random().toString(36).substring(2, 8).toUpperCase();
        setReferralCode(code);
        setIsSignedUp(true);
    };

    const copyReferralCode = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const rewards = [
        {
            level: 'Bronze Referrer',
            referrals: '1-2',
            reward: 'AED 500 credit',
            bonus: 'Free website audit',
            icon: '🥉',
            color: 'from-yellow-600 to-yellow-700'
        },
        {
            level: 'Silver Referrer',
            referrals: '3-5',
            reward: 'AED 1,500 credit',
            bonus: 'Free SEO consultation',
            icon: '🥈',
            color: 'from-gray-400 to-gray-500'
        },
        {
            level: 'Gold Referrer',
            referrals: '6-10',
            reward: 'AED 3,000 credit',
            bonus: 'Free website redesign',
            icon: '🥇',
            color: 'from-yellow-400 to-yellow-500'
        },
        {
            level: 'Platinum Partner',
            referrals: '10+',
            reward: 'AED 5,000+ credit',
            bonus: 'Partnership opportunities',
            icon: '💎',
            color: 'from-purple-400 to-purple-500'
        }
    ];

    const steps = [
        {
            step: 1,
            title: 'Sign Up',
            description: 'Join our referral program with your email',
            icon: Users
        },
        {
            step: 2,
            title: 'Share',
            description: 'Share your unique referral code with friends',
            icon: Gift
        },
        {
            step: 3,
            title: 'Earn',
            description: 'Get rewards when they sign up for our services',
            icon: Star
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-section-dark via-section-medium to-brand-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent rounded-full mb-6">
                        <Gift className="w-8 h-8 text-text-on-light" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-on-dark mb-4">
                        Referral Rewards Program
                    </h2>
                    <p className="text-xl text-text-muted-dark max-w-2xl mx-auto">
                        Earn amazing rewards by referring businesses to Nexus Digital.
                        The more you refer, the more you earn!
                    </p>
                </div>

                {/* How It Works */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <Card key={step.step} className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20">
                                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-6 h-6 text-text-on-light" />
                                </div>
                                <div className="text-sm font-semibold text-brand-accent mb-2">
                                    Step {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-text-on-dark mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-text-on-dark">
                                    {step.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>

                {/* Reward Tiers */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Reward Tiers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {rewards.map((reward, index) => (
                            <Card
                                key={index}
                                className={`p-6 text-center bg-gradient-to-br ${reward.color} text-white transform hover:scale-105 transition-all duration-300`}
                            >
                                <div className="text-4xl mb-4">{reward.icon}</div>
                                <h4 className="font-bold text-lg mb-2">{reward.level}</h4>
                                <div className="text-sm opacity-90 mb-3">
                                    {reward.referrals} referrals
                                </div>
                                <div className="text-xl font-bold mb-2">
                                    {reward.reward}
                                </div>
                                <div className="text-sm opacity-90">
                                    + {reward.bonus}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sign Up Form or Referral Dashboard */}
                <Card className="p-8 bg-white/95 backdrop-blur-sm max-w-2xl mx-auto">
                    {!isSignedUp ? (
                        <div className="text-center">
                            <Trophy className="w-12 h-12 text-dubai-gold mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-dubai-dark mb-4">
                                Join the Program
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Start earning rewards today by joining our referral program
                            </p>
                            <div className="space-y-4">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                                <Button
                                    variant="primary"
                                    className="w-full"
                                    onClick={generateReferralCode}
                                    disabled={!userEmail}
                                >
                                    Generate My Referral Code
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-dubai-dark mb-4">
                                Welcome to the Program!
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Your unique referral code is ready. Share it with your network to start earning rewards.
                            </p>

                            {/* Referral Code Display */}
                            <div className="bg-dubai-light/10 rounded-lg p-6 mb-6">
                                <div className="text-sm text-gray-600 mb-2">Your Referral Code</div>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="text-2xl font-bold text-dubai-dark tracking-wider">
                                        {referralCode}
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={copyReferralCode}
                                        className="flex items-center gap-2"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied ? 'Copied!' : 'Copy'}
                                    </Button>
                                </div>
                            </div>

                            {/* Share Options */}
                            <div className="space-y-4">
                                <div className="text-sm text-gray-600">
                                    Share your code via:
                                </div>
                                <div className="flex gap-4 justify-center">
                                    <Button variant="outline" size="sm">
                                        WhatsApp
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Email
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        LinkedIn
                                    </Button>
                                </div>
                            </div>

                            {/* Mock Dashboard */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-dubai-dark">0</div>
                                        <div className="text-sm text-gray-600">Referrals</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-dubai-gold">AED 0</div>
                                        <div className="text-sm text-gray-600">Earned</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-600">Bronze</div>
                                        <div className="text-sm text-gray-600">Level</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Card>

                {/* Terms */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-300">
                        By participating, you agree to our{' '}
                        <a href="#" className="text-dubai-gold hover:underline">
                            Referral Program Terms & Conditions
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReferralProgram;
