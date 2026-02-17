import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Index() {
  const [activeCountry, setActiveCountry] = useState(0);

  const scrollToForm = () => {
    document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const registrationSteps = [
    {
      country: 'Россия',
      steps: [
        { title: 'Предоценка проекта', description: 'Анализ документов и требований' },
        { title: 'Требования и план', description: 'Определение маршрута регистрации' },
        { title: 'Досье и локализация', description: 'Подготовка документации' },
        { title: 'Подача заявки', description: 'Формирование и отправка досье' },
        { title: 'Экспертиза', description: 'Сопровождение и ответы на запросы' },
        { title: 'Организация испытаний', description: 'Проведение необходимых тестов' },
        { title: 'Получение решения', description: 'Оформление регистрации' },
        { title: 'Пострегистрация', description: 'Поддержка и изменения' },
      ],
      info: 'Контрольные точки: подача досье, экспертиза, решение',
      timeFactors: 'Сроки зависят от категории изделия, полноты документации, потребности в испытаниях'
    },
    {
      country: 'ЕАЭС',
      steps: [
        { title: 'Предоценка', description: 'Анализ возможности регистрации' },
        { title: 'Стратегия маршрута', description: 'Выбор оптимальной схемы' },
        { title: 'Подготовка досье', description: 'Сбор и локализация документов' },
        { title: 'Подача', description: 'Регистрация заявки' },
        { title: 'Экспертиза ЕЭК', description: 'Прохождение проверки' },
        { title: 'Ответы на запросы', description: 'Работа с замечаниями' },
        { title: 'Регистрационное удостоверение', description: 'Получение документа' },
        { title: 'Поддержка', description: 'Продление и изменения' },
      ],
      info: 'Контрольные точки: подача, экспертиза ЕЭК, РУ',
      timeFactors: 'Влияют: класс риска, наличие клинических данных, качество технической документации'
    },
    {
      country: 'Казахстан',
      steps: [
        { title: 'Первичный анализ', description: 'Оценка документации' },
        { title: 'План регистрации', description: 'Разработка стратегии' },
        { title: 'Локализация досье', description: 'Подготовка документов' },
        { title: 'Подача заявления', description: 'Инициация процесса' },
        { title: 'Экспертная оценка', description: 'Проверка документов' },
        { title: 'Испытания (при необходимости)', description: 'Проведение тестов' },
        { title: 'Решение регулятора', description: 'Получение разрешения' },
        { title: 'Сопровождение', description: 'Поддержка регистрации' },
      ],
      info: 'Контрольные точки: заявление, экспертиза, решение',
      timeFactors: 'Учитываются: категория продукта, требования к испытаниям, актуальность документации'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">R</span>
            </div>
            <span className="font-heading font-bold text-2xl text-primary">Regicom</span>
          </div>
          <Button onClick={scrollToForm} size="lg" className="font-semibold">
            Оценить проект
          </Button>
        </div>
      </header>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
              Выход на рынок РФ и ЕАЭС —<br />предсказуемо и без дорогих ошибок
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Сначала подтверждаем канал продаж и коммерческую целесообразность,
              затем ведём регистрацию до результата — с понятным планом, сроками и бюджетом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={scrollToForm} size="lg" className="text-lg px-8 py-6">
                <Icon name="FileCheck" className="mr-2" size={20} />
                Оценить проект
              </Button>
              <Button onClick={scrollToForm} variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Map" className="mr-2" size={20} />
                Получить дорожную карту
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={18} className="text-accent" />
                <span>200+ успешных проектов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={18} className="text-accent" />
                <span>12 лет на рынке</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={18} className="text-accent" />
                <span>Работа под результат</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-4">
              Типичные проблемы при выходе на рынок
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Ошибки на старте оборачиваются потерей времени, денег и рыночных возможностей
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'UserX',
                  title: 'Регистрация без партнёра',
                  text: 'Начали процесс, не подтвердив дистрибьютора — в итоге сертификат есть, а продаж нет'
                },
                {
                  icon: 'RouteOff',
                  title: 'Неверный маршрут',
                  text: 'Выбрали не ту схему регистрации — теряете месяцы на переделку документов'
                },
                {
                  icon: 'FileX',
                  title: 'Досье переделывают',
                  text: 'Документация не соответствует требованиям — экспертиза возвращает на доработку'
                },
                {
                  icon: 'AlertTriangle',
                  title: 'Неожиданные требования',
                  text: 'Внезапно всплывают испытания или клинические требования, о которых не знали'
                },
                {
                  icon: 'TrendingDown',
                  title: 'Сроки и бюджет «плывут»',
                  text: 'Процесс затягивается без понятных причин, затраты растут непредсказуемо'
                },
                {
                  icon: 'XCircle',
                  title: 'Окно рынка закрывается',
                  text: 'Пока оформляли регистрацию, конкуренты заняли нишу или изменились условия'
                }
              ].map((problem, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon name={problem.icon} size={32} className="text-destructive mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
              Формула нашего подхода
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Сначала — ясность и коммерческая уверенность,<br />
              потом — регуляторная реализация
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Regicom</span> соединяет рынок и регуляторные требования
                в одну управляемую дорожную карту. Вы получаете не просто регистрацию,
                а выход на рынок с проверенным партнёром и понятной экономикой проекта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-4">
              О компании
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              Мы — практичная команда, которая отвечает за результат.<br />
              Работаем прозрачно, понятно и с полной ответственностью
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'Award',
                  title: '12 лет специализации',
                  text: 'Глубокая экспертиза в регистрации фармацевтических препаратов и медицинских изделий'
                },
                {
                  icon: 'Target',
                  title: 'Фокус на РФ и ЕАЭС',
                  text: 'Знаем особенности каждого рынка, актуальные требования и эффективные маршруты'
                },
                {
                  icon: 'Users',
                  title: 'Команда профессионалов',
                  text: 'Регуляторные специалисты, эксперты по документации, переводчики, менеджеры проектов'
                },
                {
                  icon: 'FileText',
                  title: 'Понятная отчётность',
                  text: 'Регулярные статус-репорты, контрольные точки, прозрачное управление сроками и бюджетом'
                },
                {
                  icon: 'Handshake',
                  title: 'Работа с производителями',
                  text: 'Помогаем как международным компаниям, так и локальным производителям медтехники'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={24} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-4">
              Сначала — дистрибьютор
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              На старте помогаем найти и отобрать надёжного партнёра для вашего продукта
            </p>
            <Card className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="font-heading font-semibold text-2xl mb-4">
                    Что мы делаем
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Определяем профиль дистрибьютора под ваш продукт',
                      'Формируем short-list проверенных компаний',
                      'Организуем первые контакты и переговоры',
                      'Помогаем проверить спрос и оценить экономику',
                      'Согласовываем условия партнёрства'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-8 flex items-center justify-center min-h-[280px]">
                  <div className="text-center">
                    <Icon name="Network" size={64} className="text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">Проверенная сеть партнёров</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToForm} size="lg" className="flex-1">
                  <Icon name="ListChecks" className="mr-2" size={20} />
                  Запросить short-list
                </Button>
                <Button onClick={scrollToForm} variant="outline" size="lg" className="flex-1">
                  <Icon name="MessageSquare" className="mr-2" size={20} />
                  Обсудить канал продаж
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-4">
              Регистрация и сопровождение
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              После подтверждения рынка берём регистрацию под ключ — от стратегии до получения документов
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Pill" size={28} className="text-accent" />
                  <h3 className="font-semibold text-xl">Лекарственные препараты</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Стратегия и выбор маршрута регистрации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Подготовка и локализация досье</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Сопровождение экспертизы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Организация клинических исследований</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Работа с изменениями и продлением РУ</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="HeartPulse" size={28} className="text-accent" />
                  <h3 className="font-semibold text-xl">Медицинские изделия</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Определение класса и маршрута</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Подготовка технической документации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Сопровождение экспертизы Росздравнадзора</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Организация испытаний при необходимости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="ChevronRight" size={16} className="mt-1 flex-shrink-0" />
                    <span>Поддержка после регистрации</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="bg-muted rounded-lg p-6 flex items-center gap-4">
              <Icon name="Globe" size={32} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">География работы</h4>
                <p className="text-muted-foreground">
                  Россия, Казахстан, Беларусь, Армения, Кыргызстан — все страны ЕАЭС
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-4">
              Как проходит регистрация
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Выберите страну, чтобы увидеть схему процесса
            </p>
            <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
              <CarouselContent>
                {registrationSteps.map((countryData, countryIdx) => (
                  <CarouselItem key={countryIdx}>
                    <Card className="p-8 lg:p-12">
                      <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">
                        {countryData.country}
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {countryData.steps.map((step, stepIdx) => (
                          <div key={stepIdx} className="relative">
                            <div className="bg-muted rounded-lg p-4 h-full">
                              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-3">
                                {stepIdx + 1}
                              </div>
                              <h4 className="font-semibold text-sm mb-2">{step.title}</h4>
                              <p className="text-xs text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4 mb-6">
                        <div className="bg-accent/10 rounded-lg p-4 flex items-start gap-3">
                          <Icon name="MapPin" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-semibold mb-1">Контрольные точки</h5>
                            <p className="text-sm text-muted-foreground">{countryData.info}</p>
                          </div>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-4 flex items-start gap-3">
                          <Icon name="Clock" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-semibold mb-1">Что влияет на сроки</h5>
                            <p className="text-sm text-muted-foreground">{countryData.timeFactors}</p>
                          </div>
                        </div>
                      </div>
                      <Button onClick={scrollToForm} size="lg" className="w-full">
                        Оценить проект по {countryData.country === 'ЕАЭС' ? 'ЕАЭС' : `стране ${countryData.country}`}
                      </Button>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-6">
                <CarouselPrevious className="relative static" />
                <CarouselNext className="relative static" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-12">
              Цифры и факты
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: '200+', label: 'Завершённых проектов', icon: 'CheckCircle2' },
                { number: '12', label: 'Лет на рынке', icon: 'Calendar' },
                { number: '5', label: 'Стран ЕАЭС', icon: 'Globe2' },
                { number: '50+', label: 'Активных клиентов', icon: 'Users2' }
              ].map((stat, idx) => (
                <div key={idx} className="p-6">
                  <Icon name={stat.icon} size={40} className="text-accent mx-auto mb-4" />
                  <div className="font-heading font-bold text-4xl text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-center mb-12">
              Наши клиенты
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center gap-3">
                  <Icon name="Building2" size={28} className="text-accent" />
                  Китайские производители
                </h3>
                <div className="space-y-4">
                  {[
                    { category: 'Общая медицина', description: 'Регистрация медицинского оборудования общего назначения' },
                    { category: 'Стоматология', description: 'Вывод на рынок стоматологических изделий и материалов' },
                    { category: 'Диагностика', description: 'Регистрация диагностического оборудования и тест-систем' }
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold mb-1">{item.category}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-8">
                <h3 className="font-heading font-semibold text-2xl mb-6 flex items-center gap-3">
                  <Icon name="Globe2" size={28} className="text-accent" />
                  Международные компании
                </h3>
                <div className="space-y-4">
                  {[
                    { category: 'Лекарственные препараты', description: 'Регистрация фармпрепаратов различных категорий' },
                    { category: 'Медицинские изделия', description: 'Комплексная регистрация медтехники для клиник' },
                    { category: 'Лабораторное оборудование', description: 'Вывод на рынок лабораторных систем и реагентов' }
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold mb-1">{item.category}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="evaluation-form" className="py-20 bg-gradient-to-b from-white to-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
                Оценить проект
              </h2>
              <p className="text-lg text-muted-foreground">
                Заполните форму — мы проанализируем вашу ситуацию и предложим оптимальный маршрут
              </p>
            </div>
            <Card className="p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания *</Label>
                    <Input id="company" placeholder="Название компании" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product">Продукт *</Label>
                    <Input id="product" placeholder="Название продукта" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Категория продукта *</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pharma">Лекарственный препарат</SelectItem>
                      <SelectItem value="medical-device">Медицинское изделие</SelectItem>
                      <SelectItem value="diagnostic">Диагностическое оборудование</SelectItem>
                      <SelectItem value="dental">Стоматологическое изделие</SelectItem>
                      <SelectItem value="lab">Лабораторное оборудование</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="countries">Целевые страны *</Label>
                  <Select>
                    <SelectTrigger id="countries">
                      <SelectValue placeholder="Выберите рынок" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="russia">Россия</SelectItem>
                      <SelectItem value="eaeu">ЕАЭС (все страны)</SelectItem>
                      <SelectItem value="kazakhstan">Казахстан</SelectItem>
                      <SelectItem value="belarus">Беларусь</SelectItem>
                      <SelectItem value="armenia">Армения</SelectItem>
                      <SelectItem value="multiple">Несколько стран</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stage">Стадия готовности документов *</Label>
                  <Select>
                    <SelectTrigger id="stage">
                      <SelectValue placeholder="Выберите стадию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ready">Документы готовы</SelectItem>
                      <SelectItem value="partial">Частично готовы</SelectItem>
                      <SelectItem value="planning">Только планирование</SelectItem>
                      <SelectItem value="none">Документов пока нет</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact">Контактное лицо *</Label>
                    <Input id="contact" placeholder="Имя и фамилия" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="email@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон / Мессенджер</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Дополнительная информация</Label>
                  <Textarea 
                    id="comment" 
                    placeholder="Расскажите о вашей ситуации, сроках, особых требованиях..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Мы свяжемся с вами в течение 24 часов и предоставим первичную оценку проекта
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-xl">R</span>
                </div>
                <span className="font-heading font-bold text-2xl">Regicom</span>
              </div>
              <p className="text-white/80">
                Регистрация фармпрепаратов и медизделий на рынках России и ЕАЭС
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@regicom.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Мессенджеры</h4>
              <div className="flex gap-3">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Regicom. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
