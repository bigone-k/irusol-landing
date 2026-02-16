"use client";

/* Design Philosophy: Organic Gamification
 * - Natural growth curves with soft flowing shapes
 * - Asymmetric offset grid for dynamic layout
 * - Floating cards with depth and shadows
 * - Wave dividers between sections
 * - Butter yellow highlights, mint green primary, pink accents (5% max)
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { CheckCircle2, Target, Sprout, TrendingUp, Sparkles, Mail, ChevronRight } from "lucide-react";

export default function Home() {
  const [participationType, setParticipationType] = useState<"beta" | "waitlist">("beta");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goalType: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.agreed) {
      toast.error("필수 항목을 모두 입력해주세요");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (participationType === "beta") {
      toast.success("신청 완료! 순차 초대 메일을 보내드릴게요.");
    } else {
      toast.success("등록 완료! 출시/업데이트 소식을 가장 먼저 알려드릴게요.");
    }

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", goalType: "", agreed: false });
  };

  const openGoogleForm = () => {
    window.open("https://forms.gle/zmyvceaMoJdvJdF87", "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/z1rLkRKTIJsOGwoPRR0ti9/sandbox/ap9O9Oc8pEf6fSKMgPqDda-img-1_1771142032000_na1fn_aGVyb19iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvejFyTGtSS1RJSnNPR3dvUFJSMHRpOS9zYW5kYm94L2FwOU85T2M4cEVmNmZTS01nUHFEZGEtaW1nLTFfMTc3MTE0MjAzMjAwMF9uYTFmbl9hR1Z5YjE5aVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R6BdI~ip2EeKAxdvSnxKuyvZtEsybJF4hB0RJMR0z0I-ihfSqTmnJqmeNM2dOn9Ey0k6RTDPd7gAG8kXyBqIBYZjZDQBxeM8EnppxtpzQxe1nZtdWRWRvq8z5InW69~aUsJcNODu8DVsJgiENfZUrY7FzGXLwze0RONb7JzZaKnw0XraXMmjEnsxBpSGCAMwPKm6jzkaLfxm71k2-dcQ4nSScZHWMxEXu8gyuwBkOdOT6pVR9BIIBH35PZqxfKJVI5~X15~tlhwye4wEhRM-uOn0xcotfqBz~KytRfMhg7XvYp-T1iNyUCIMjtgohj6QEU~CZB3Nq9eyHwBkKjYk6Q__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Character */}
          <div className="flex justify-center lg:justify-start animate-bounce-in">
            <img
              src="/img/duto_mascot_transparent.png"
              alt="DUTO Character"
              className="w-80 h-80 object-contain animate-float drop-shadow-2xl"
            />
          </div>

          {/* Right: Text & CTA */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="butter-chip">게임같은 목표·루틴 앱</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">캐릭터 성장으로</span>
              <br />
              <span className="text-[var(--duto-text)]">꾸준함을 만들어요</span>
            </h1>

            <p className="text-lg lg:text-xl text-[var(--duto-muted)] max-w-xl">
              큰 꿈을 오늘의 퀘스트로, 하루하루 쌓이는 성장 기록
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-xl font-semibold text-[var(--duto-text)]">
                내 인생 첫 캐릭터가 기다리고 있어요 🥚
              </p>
              <p className="text-sm text-[var(--duto-muted)]">
                지금 신청하면 무료로 먼저 시작할 수 있어요
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
                  style={{ backgroundColor: 'var(--duto-primary-dark)', color: 'white' }}
                  onClick={openGoogleForm}
                >
                  베타테스터 신청하기
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full font-semibold border-2 hover:bg-[var(--duto-primary)] hover:text-white transition-all"
                  style={{ borderColor: 'var(--duto-primary)', color: 'var(--duto-primary-dark)' }}
                  onClick={openGoogleForm}
                >
                  출시 알림 받기
                </Button>
              </div>

              <p className="text-sm text-[var(--duto-muted)] pt-2">
                베타가 부담되면, 출시 알림만 받아도 괜찮아요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - 4 Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--duto-text)]">이런 고민, 있으신가요?</h2>
            <p className="text-lg text-[var(--duto-muted)]">많은 분들이 같은 어려움을 겪고 있어요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="floating-card p-8 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--duto-primary)' }}>
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--duto-text)]">계획은 세우는데, 실행이 안 돼요</h3>
              <p className="text-[var(--duto-muted)]">의지 문제보다, &apos;오늘 뭐부터&apos;가 보이는 게 중요해요</p>
            </Card>

            <Card className="floating-card p-8 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--duto-butter)' }}>
                  <Sparkles className="w-6 h-6" style={{ color: 'var(--duto-text)' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--duto-text)]">하고 싶은 건 많은데, 어디서부터 시작해야 할지 모르겠어요</h3>
              <p className="text-[var(--duto-muted)]">목표가 막연하면 첫 발을 떼기가 정말 어려워요</p>
            </Card>

            <Card className="floating-card p-8 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--duto-primary)' }}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--duto-text)]">목표 달성 과정이 지루하고, 동기부여가 안 돼요</h3>
              <p className="text-[var(--duto-muted)]">달성 과정이 눈에 보이지 않으면 오래 이어가기 힘들어요</p>
            </Card>

            <Card className="floating-card p-8 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--duto-butter)' }}>
                  <Sprout className="w-6 h-6" style={{ color: 'var(--duto-text)' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--duto-text)]">작심삼일이 반복되면 자책만 늘어요</h3>
              <p className="text-[var(--duto-muted)]">잘 못한 것만 남고, 잘한 건 금방 흐릿해져요</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section - Core 3 Elements */}
      <section className="py-20" style={{ backgroundColor: 'var(--duto-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 shadow-md" style={{ backgroundColor: 'rgba(255, 223, 128, 0.15)', borderColor: 'var(--duto-butter)' }}>
              <span className="text-lg font-bold text-[var(--duto-text)]">⭐ 만 명+이 선택한 &apos;목표관리 노션 템플릿&apos; 로직, 게임화 앱으로 탄생!</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--duto-text)]">실행할수록 자라나는 나만의 캐릭터</h2>
              <p className="text-lg text-[var(--duto-muted)] max-w-3xl mx-auto">
                알에서 시작해 4단계 진화까지 — 당신의 꾸준함이 캐릭터의 성장으로 이어져요
              </p>
            </div>

            <div className="pt-8 space-y-2">
              <h3 className="text-2xl font-bold text-[var(--duto-text)]">목표 달성을 위한 3가지 핵심 요소</h3>
              <p className="text-lg text-[var(--duto-muted)]">두토는 &apos;구조화 × 지속 × 피드백&apos;으로 꾸준함을 설계해요</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--duto-primary)' }}>
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--duto-text)]">구조</h3>
              <p className="text-[var(--duto-muted)] leading-relaxed">
                목표를 &apos;오늘 할 퀘스트&apos;까지 구조화해, 바로 실행할 수 있게 해요.
              </p>
              <p className="text-sm text-[var(--duto-muted)] italic">
                목표 → 프로젝트 → 퀘스트(습관/과업)
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--duto-butter)' }}>
                <Sprout className="w-10 h-10" style={{ color: 'var(--duto-text)' }} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--duto-text)]">지속</h3>
              <p className="text-[var(--duto-muted)] leading-relaxed">
                퀘스트 완료가 곧 성장/보상으로 연결돼서, 작은 성공이 계속 이어져요.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--duto-primary)' }}>
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--duto-text)]">피드백</h3>
              <p className="text-[var(--duto-muted)] leading-relaxed">
                기록이 쌓일수록 코칭이 더 정교해져서, 다음 행동이 쉬워져요.
              </p>
              <p className="text-sm text-[var(--duto-muted)] italic">
                *리포트/코칭은 로드맵으로 단계 적용*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Flow Section - 4 Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--duto-text)]">사용 흐름</h2>
            <p className="text-lg text-[var(--duto-muted)]">쉬운 말로, 부담 없이 시작하세요</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: 'var(--duto-primary-dark)' }}>
                1
              </div>
              <Card className="flex-1 p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
                <h3 className="text-xl font-bold mb-2 text-[var(--duto-text)]">비전으로 인생의 방향을 잡아요 <span className="text-sm font-normal text-[var(--duto-muted)]">(선택)</span></h3>
                <p className="text-[var(--duto-muted)]">&quot;내가 어떤 사람이 되고 싶은지&quot; 적으면, 목표가 흔들리지 않아요.</p>
                <p className="text-sm text-[var(--duto-muted)] italic mt-2">*(비전이 없어도 바로 시작할 수 있어요.)*</p>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: 'var(--duto-primary-dark)' }}>
                2
              </div>
              <Card className="flex-1 p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
                <h3 className="text-xl font-bold mb-2 text-[var(--duto-text)]">목표를 정해요</h3>
                <p className="text-[var(--duto-muted)]">3개월 동안 이루고 싶은 목표를 한 줄로 정해요.</p>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: 'var(--duto-primary-dark)' }}>
                3
              </div>
              <Card className="flex-1 p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
                <h3 className="text-xl font-bold mb-2 text-[var(--duto-text)]">프로젝트로 &apos;실행 구조&apos;를 만들어요 <span className="text-sm font-normal text-[var(--duto-muted)]">(핵심)</span></h3>
                <p className="text-[var(--duto-muted)]">목표를 4주 프로젝트로 쪼개서, 이번 달에 끝낼 일을 선명하게 만들어요.</p>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: 'var(--duto-primary-dark)' }}>
                4
              </div>
              <Card className="flex-1 p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
                <h3 className="text-xl font-bold mb-2 text-[var(--duto-text)]">오늘의 퀘스트를 완료해요</h3>
                <p className="text-[var(--duto-muted)]">프로젝트를 오늘 할 수 있는 퀘스트(습관/과업)로 바꾸고, 완료할수록 캐릭터가 성장하고 기록이 쌓여요.</p>
              </Card>
            </div>

            <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'rgba(125, 230, 195, 0.1)' }}>
              <p className="text-[var(--duto-muted)] text-center">
                <span className="font-semibold text-[var(--duto-text)]">예:</span> &quot;5kg 감량(목표)&quot; → &quot;운동 루틴 만들기(4주 프로젝트)&quot; → &quot;주 3회 운동(퀘스트)&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth System Preview Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--duto-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[var(--duto-text)]">성장 시스템 미리보기</h2>
            <div className="max-w-3xl mx-auto space-y-3">
              <p className="text-lg text-[var(--duto-muted)]">퀘스트를 완료할수록 내 캐릭터가 성장해요.</p>
              <p className="text-lg text-[var(--duto-muted)]">알 → 새싹 → 개화 → 만개, 4단계 진화로 &apos;진행감&apos;을 눈에 보이게 만들어요.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/z1rLkRKTIJsOGwoPRR0ti9/sandbox/ap9O9Oc8pEf6fSKMgPqDda-img-4_1771142035000_na1fn_c3RydWN0dXJlX2RpYWdyYW0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvejFyTGtSS1RJSnNPR3dvUFJSMHRpOS9zYW5kYm94L2FwOU85T2M4cEVmNmZTS01nUHFEZGEtaW1nLTRfMTc3MTE0MjAzNTAwMF9uYTFmbl9jM1J5ZFdOMGRYSmxYMlJwWVdkeVlXMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XP9lP0jqDGBcbGZK9jof1Q8M20juePRI0aTOsYiDD~Qx3IdyH3HcRGS6EjBHANVfDDMC0iYgKWShMiuj~NWvGq9SZzGp7Ji9pjNmP5eMORK9d-1gQv4TUorPaszJwrt~cVPwgm6dHHLfGGLDI82HKqhN5zu6fkv6zpHBIWvcsqfXHf48n9zbE5tcYxkzN1Msgqbno2kF753vEV61-ViORapQMgJBGCnS~QTtyb4ATUrI1yQf3ZMk4WgZJeqINI8uO1~3Nfe79Y8w~C2ESvQjxvfddl7gQeXhxYyt8fhinACM3du0e44tL1zcF3DwnaiZ9bOWJ9Yz0eoEAF8Sl9NsNw__"
                    alt="4단계 캐릭터 진화 - 루미"
                    className="w-full h-64 object-contain mb-4"
                  />
                </div>
                <div className="text-center">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/z1rLkRKTIJsOGwoPRR0ti9/sandbox/ap9O9Oc8pEf6fSKMgPqDda-img-2_1771142024000_na1fn_cXVlc3RfaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvejFyTGtSS1RJSnNPR3dvUFJSMHRpOS9zYW5kYm94L2FwOU85T2M4cEVmNmZTS01nUHFEZGEtaW1nLTJfMTc3MTE0MjAyNDAwMF9uYTFmbl9jWFZsYzNSZmFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ek1Jsl620zx2TntOguB4b7aJqqye5KeiKLVlD-e5g65pVXSOjZ1bWw1F4tr4quPItoqPfaLqDBhJOf9xvbEQ08m-XIt1jagyXkmFfIjYu30BcSg83vqH2D2CAQZ3TJweRel3Sqb6Ed7gxApC2LRIEtze~aj9IdEqTocNKtHJU9IXCtklGm48IHjn2V8SSUzQ5MnNcqzv73F4rHut90EoF5G4YI7oN8f4VM3Vl~ij0FRz0XxRDPioFNA9LaUA0Mtv0uJUSw00bwjM8-~3oQbH2ye7UlkUh9dPqVjf1aylGZ-bncojM6TBfgZhAmOGd90NOfHLiohinf2irZxcG7VHow__"
                    alt="4단계 캐릭터 진화 - 루미"
                    className="w-full h-64 object-contain mb-4"
                  />
                </div>
                <div className="text-center">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/z1rLkRKTIJsOGwoPRR0ti9/sandbox/ap9O9Oc8pEf6fSKMgPqDda-img-3_1771142032000_na1fn_Z3Jvd3RoX3Zpc3VhbGl6YXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvejFyTGtSS1RJSnNPR3dvUFJSMHRpOS9zYW5kYm94L2FwOU85T2M4cEVmNmZTS01nUHFEZGEtaW1nLTNfMTc3MTE0MjAzMjAwMF9uYTFmbl9aM0p2ZDNSb1gzWnBjM1ZoYkdsNllYUnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=peBYv8rEPMAXy4R0XXmf-NO9erN7F-787BJadpTDfiIM4L0iecsFFSgXQoWdtJg6ixrKX3E1IWFTHh0yy39L7IMAhrNgEvvWcMWwosnTW~LWAaMAvOQHmn--xcHc-Rt2WIK5u0FhYWglklqiepeQwsMkHCCcIi4gfBeeA9Pkz8pjsjoHao17wui23XcX2A77RlaTJiYfNuV91PNybOajbqXNQqxLz1IDkktyrej9VCm3zAxonWQ-cymh5KWWexhdd0KlTPJ~RipDFnqXIryKr0aDBN2-eaCIEkOqCMAyBvbFuyzI0HzD2~fXfQJYxNhANg0vQaYQj1sB0hzeHcZtqA__"
                    alt="4단계 캐릭터 진화 - 루미"
                    className="w-full h-64 object-contain mb-4"
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-2" style={{ borderColor: 'var(--duto-border)' }}>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--duto-primary-dark)' }} />
                    <span className="text-[var(--duto-muted)]">퀘스트 완료 → 성장 포인트 획득</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--duto-primary-dark)' }} />
                    <span className="text-[var(--duto-muted)]">일정 기준 달성 → 다음 단계 해금</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" style={{ color: 'var(--duto-primary-dark)' }} />
                    <span className="text-[var(--duto-muted)]">성장 기록은 리포트/피드백으로 이어져요 <span className="text-sm italic">*(로드맵 적용 가능)*</span></span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/z1rLkRKTIJsOGwoPRR0ti9/sandbox/ap9O9Oc8pEf6fSKMgPqDda-img-5_1771142032000_na1fn_YmV0YV9jZWxlYnJhdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvejFyTGtSS1RJSnNPR3dvUFJSMHRpOS9zYW5kYm94L2FwOU85T2M4cEVmNmZTS01nUHFEZGEtaW1nLTVfMTc3MTE0MjAzMjAwMF9uYTFmbl9ZbVYwWVY5alpXeGxZbkpoZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=di96-7rtfgSHOqlpjZFkskTynNSTo233VtfaoJD~4dDVo28T-W8ue8pFsdMabrUvUkPSgZiCE-y2m8reZ6GcWef~IrLyoMpqHOF3jW3~Q6B6yuBT6W2uc1gSr9wKJ3nE3jeFDx2vNdUmGc9NeUVzkh~Bg80~muunb5I8GjXYVLWoYeUW-probzlv2kE7FFolyLZRkckgz6Gqvyr9RSKxrpeIL6P5IcrXKAn5BACteYliOBWP1181o3ayUH-qWuSN3R6sfL9NOCDY6L~cwkMqb8FRqNyRmPlMgDwBeuGzEBG82bf81eE1UtiXo7WGYvd9-DdB96na5A~iGFjYkawcNQ__"
                alt="Beta Celebration"
                className="w-48 h-48 object-contain mx-auto mb-6"
              />
            </div>

            <h2 className="text-4xl font-bold mb-4 text-[var(--duto-text)]">베타로 먼저 만나보세요</h2>
            <p className="text-lg text-[var(--duto-muted)] mb-4">베타로 가장 먼저 써보고, 피드백이 제품에 반영돼요.</p>
            <p className="text-sm text-[var(--duto-muted)] mb-12">베타가 부담되면 출시 알림만 받아도 괜찮아요.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
                <h3 className="text-lg font-bold mb-4 text-[var(--duto-text)]">공통 혜택</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--duto-primary-dark)' }} />
                    <span className="text-[var(--duto-muted)]">출시 소식을 가장 먼저 받아요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--duto-primary-dark)' }} />
                    <span className="text-[var(--duto-muted)]">얼리 유저 혜택을 출시 시 안내드려요</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 relative overflow-hidden" style={{ borderColor: 'var(--duto-primary)', backgroundColor: 'rgba(125, 230, 195, 0.05)' }}>
                <div className="absolute top-2 right-2">
                  <span className="pink-badge">베타 전용</span>
                </div>
                <h3 className="text-lg font-bold mb-4 text-[var(--duto-text)]">베타테스터 추가 혜택</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--duto-primary-dark)' }} />
                    <span className="text-[var(--duto-muted)]">프리미엄 기능 1~3개월 무료</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--duto-primary-dark)' }} />
                    <span className="text-[var(--duto-muted)]">초기 공헌자 배지/칭호</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Button
              size="lg"
              className="text-lg px-10 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: 'var(--duto-primary-dark)', color: 'white' }}
              onClick={openGoogleForm}
            >
              베타테스터 신청하기
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section id="signup-form" className="py-20" style={{ backgroundColor: 'var(--duto-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 border-2 shadow-2xl" style={{ borderColor: 'var(--duto-border)' }}>
              <div className="text-center mb-8 space-y-4">
                <h2 className="text-3xl font-bold text-[var(--duto-text)]">베타/출시 알림 신청</h2>
                <p className="text-[var(--duto-muted)]">두토와 함께 성장을 시작하세요</p>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="text-lg px-10 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: 'var(--duto-primary-dark)', color: 'white' }}
                    onClick={openGoogleForm}
                  >
                    신청하기 (구글 폼)
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-[var(--duto-muted)] mt-3">10초면 신청 완료</p>
                </div>
              </div>

              <div className="hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[var(--duto-text)] font-semibold">이름 *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="홍길동"
                    className="border-2"
                    style={{ borderColor: 'var(--duto-border)' }}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[var(--duto-text)] font-semibold">이메일 *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="example@email.com"
                    className="border-2"
                    style={{ borderColor: 'var(--duto-border)' }}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[var(--duto-text)] font-semibold">참여 유형 *</Label>
                  <RadioGroup value={participationType} onValueChange={(value: "beta" | "waitlist") => setParticipationType(value)}>
                    <div className="flex items-start space-x-3 p-4 rounded-lg border-2 hover:bg-white/50 transition-colors cursor-pointer" style={{ borderColor: participationType === 'beta' ? 'var(--duto-primary)' : 'var(--duto-border)', backgroundColor: participationType === 'beta' ? 'rgba(125, 230, 195, 0.05)' : 'transparent' }}>
                      <RadioGroupItem value="beta" id="beta" className="mt-0.5" />
                      <Label htmlFor="beta" className="flex-1 cursor-pointer">
                        <div className="font-semibold text-[var(--duto-text)]">베타테스터로 참여할게요</div>
                        <div className="text-sm text-[var(--duto-muted)] mt-1">우선 초대 + 베타 혜택 제공</div>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3 p-4 rounded-lg border-2 hover:bg-white/50 transition-colors cursor-pointer" style={{ borderColor: participationType === 'waitlist' ? 'var(--duto-primary)' : 'var(--duto-border)', backgroundColor: participationType === 'waitlist' ? 'rgba(125, 230, 195, 0.05)' : 'transparent' }}>
                      <RadioGroupItem value="waitlist" id="waitlist" className="mt-0.5" />
                      <Label htmlFor="waitlist" className="flex-1 cursor-pointer">
                        <div className="font-semibold text-[var(--duto-text)]">출시 알림만 받을게요 (대기자)</div>
                        <div className="text-sm text-[var(--duto-muted)] mt-1">출시/업데이트 소식 우선 안내</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {participationType === 'beta' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[var(--duto-text)] font-semibold">연락처 (선택)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="010-1234-5678"
                        className="border-2"
                        style={{ borderColor: 'var(--duto-border)' }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goalType" className="text-[var(--duto-text)] font-semibold">목표 유형 (선택)</Label>
                      <Select value={formData.goalType} onValueChange={(value) => setFormData({...formData, goalType: value})}>
                        <SelectTrigger className="border-2 w-full" style={{ borderColor: 'var(--duto-border)' }}>
                          <SelectValue placeholder="관심 있는 목표 유형을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career">취업/커리어</SelectItem>
                          <SelectItem value="learning">영어/학습</SelectItem>
                          <SelectItem value="health">건강/운동</SelectItem>
                          <SelectItem value="routine">루틴/생활</SelectItem>
                          <SelectItem value="other">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="flex items-start space-x-3 p-4 rounded-lg" style={{ backgroundColor: 'rgba(125, 230, 195, 0.05)' }}>
                  <Checkbox
                    id="agreed"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => setFormData({...formData, agreed: checked as boolean})}
                    required
                  />
                  <Label htmlFor="agreed" className="text-sm text-[var(--duto-muted)] leading-relaxed cursor-pointer">
                    제출한 정보는 베타/출시 안내 목적에만 사용되며, 원하면 언제든 구독 해지할 수 있어요.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: 'var(--duto-primary-dark)', color: 'white' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "제출 중..." : participationType === 'beta' ? "베타 신청 완료" : "대기자 등록 완료"}
                </Button>
              </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[var(--duto-text)]">자주 묻는 질문</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <h3 className="text-lg font-bold mb-2 text-[var(--duto-text)]">무료인가요?</h3>
              <p className="text-[var(--duto-muted)]">베타 참여 및 대기자 등록은 무료예요. (유료 기능은 정식 출시 후 안내)</p>
            </Card>

            <Card className="p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <h3 className="text-lg font-bold mb-2 text-[var(--duto-text)]">누가 쓰면 좋나요?</h3>
              <ul className="space-y-2 text-[var(--duto-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--duto-primary-dark)] mt-1">•</span>
                  <span>목표는 있지만 꾸준히 실행하기 어려운 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--duto-primary-dark)] mt-1">•</span>
                  <span>재미있게 성취감을 쌓으며 목표를 달성하고 싶은 분</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <h3 className="text-lg font-bold mb-2 text-[var(--duto-text)]">베타는 언제 시작하나요?</h3>
              <p className="text-[var(--duto-muted)]">신청 순서에 따라 순차 초대드려요. 안내 메일을 보내드릴게요.</p>
            </Card>

            <Card className="p-6 border-2" style={{ borderColor: 'var(--duto-border)' }}>
              <h3 className="text-lg font-bold mb-2 text-[var(--duto-text)]">개인정보는 어떻게 사용하나요?</h3>
              <div className="space-y-2 text-[var(--duto-muted)]">
                <p>제출한 정보는 <strong>베타 초대 및 출시 안내 목적</strong>으로만 사용합니다.</p>
                <p>보관 기간: <strong>출시 후 3개월 이내 삭제</strong> (또는 요청 시 즉시 삭제)</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2" style={{ borderColor: 'var(--duto-border)', backgroundColor: 'var(--duto-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/img/duto_logo_horizontal_transparent.png"
                alt="DUTO Logo"
                className="h-12 object-contain"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-[var(--duto-muted)]">
              <a href="mailto:sollife0802@gmail.com" className="flex items-center gap-2 hover:text-[var(--duto-primary-dark)] transition-colors">
                <Mail className="w-4 h-4" />
                sollife0802@gmail.com
              </a>
              <a href="#" className="hover:text-[var(--duto-primary-dark)] transition-colors">개인정보 처리방침</a>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-[var(--duto-muted)]">
            © 2026 DUTO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
