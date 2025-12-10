import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedExample, setSelectedExample] = useState<'word' | 'question' | 'paragraph'>('word');

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Context.AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Возможности
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Тарифы
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
              Установить бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-slide-up">
            <Badge className="mb-6 bg-purple-50 text-primary border-purple-100 hover:bg-purple-100">
              Новый способ работы с текстом
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              ИИ-помощник прямо<br />в вашем браузере
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Выделите текст, кликните дважды — получите ответ мгновенно. Без переключений, без отвлечений.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 h-14 px-8 text-lg">
                <Icon name="Download" size={20} className="mr-2" />
                Установить расширение
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-gray-200 hover:bg-gray-50">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-16 relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-3xl rounded-full"></div>
            <Card className="relative border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8">
                <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 relative">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-4">wikipedia.org</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    <span className="font-semibold">«Hey!дoenetворитeльноe решение»</span> — фантастический рассказ 
                    Рэя Брэдбери, впервые опубликованный в 1950 году. 
                    Рассказ описывает жизнь семьи Хайнеса в доме будущего, где все процессы 
                    полностью автоматизированы. Главный герой по имени Джордж Хайнес живёт со своей женой 
                    <span className="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded"> о Джорджем Хайнесе </span>
                    Манни в масштабном футуристическом доме.
                  </p>
                  
                  <div className="absolute -right-4 top-24 animate-scale-in z-10">
                    <Card className="w-[400px] border border-gray-200 shadow-2xl bg-white rounded-2xl">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center">
                              <Icon name="Sparkles" size={14} className="text-white" />
                            </div>
                            <span className="font-semibold text-gray-900">Context.AI</span>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Icon name="X" size={16} className="text-gray-400" />
                          </Button>
                        </div>
                        
                        <div className="px-5 py-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="animate-spin">
                              <Icon name="Loader2" size={16} className="text-blue-600" />
                            </div>
                            <span className="text-sm text-gray-600">Анализируем выделение...</span>
                          </div>
                        </div>
                        
                        <div className="px-5 pb-4 flex gap-2 border-t border-gray-100 pt-4">
                          <Button size="sm" variant="outline" className="flex-1 text-xs h-9">
                            <Icon name="Copy" size={14} className="mr-1.5" />
                            Копировать
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs h-9">
                            <Icon name="Wand2" size={14} className="mr-1.5" />
                            Упростить
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs h-9">
                            <Icon name="Languages" size={14} className="mr-1.5" />
                            Перевести
                          </Button>
                        </div>
                        
                        <div className="px-5 pb-5">
                          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9">
                            <Icon name="Lightbulb" size={14} className="mr-1.5" />
                            Объяснить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-lg text-gray-600">
              Три простых шага до результата
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: 'MousePointer2',
                title: 'Выделите текст',
                description: 'Выберите любое слово, фразу или абзац на странице'
              },
              {
                step: '02',
                icon: 'Zap',
                title: 'Кликните дважды',
                description: 'Дважды кликните по выделенному тексту для вызова ИИ'
              },
              {
                step: '03',
                icon: 'CheckCircle2',
                title: 'Получите ответ',
                description: 'ИИ мгновенно анализирует контекст и даёт точный ответ'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Понимает любой контекст
            </h2>
            <p className="text-lg text-gray-600">
              ИИ автоматически определяет, что вы выделили
            </p>
          </div>

          <div className="flex gap-4 justify-center mb-8">
            {[
              { id: 'word', label: 'Слово', icon: 'Type' },
              { id: 'question', label: 'Вопрос', icon: 'HelpCircle' },
              { id: 'paragraph', label: 'Абзац', icon: 'FileText' }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedExample === tab.id ? 'default' : 'outline'}
                onClick={() => setSelectedExample(tab.id as any)}
                className={selectedExample === tab.id ? 'bg-primary text-white' : ''}
              >
                <Icon name={tab.icon as any} size={16} className="mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {selectedExample === 'word' && (
              <>
                <Card className="border-0 shadow-xl col-span-3 animate-fade-in">
                  <CardContent className="p-8">
                    <div className="bg-gray-50 rounded-xl p-6 mb-6 relative">
                      <p className="text-gray-800 text-base leading-relaxed">
                        Интернет вещей (<span className="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-medium">IoT</span>) — концепция вычислительной сети физических предметов.
                      </p>
                    </div>
                    <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon name="Sparkles" size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium mb-2">Internet of Things</p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Сеть физических устройств со встроенными датчиками и софтом, которые могут обмениваться данными через интернет
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
            {selectedExample === 'question' && (
              <>
                <Card className="border-0 shadow-xl col-span-3 animate-fade-in">
                  <CardContent className="p-8">
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <p className="text-gray-800 text-base leading-relaxed">
                        <span className="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-medium">Что такое нейронная сеть?</span>
                      </p>
                    </div>
                    <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon name="Sparkles" size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Нейронная сеть — это вычислительная модель, вдохновлённая работой мозга. 
                            Она состоит из слоёв искусственных нейронов, которые обрабатывают данные 
                            и находят закономерности. Используется для распознавания образов, 
                            обработки языка и предсказаний.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
            {selectedExample === 'paragraph' && (
              <>
                <Card className="border-0 shadow-xl col-span-3 animate-fade-in">
                  <CardContent className="p-8">
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">Исходный текст</div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <span className="bg-blue-100 text-blue-900 px-1 py-0.5 rounded">
                          Квантовые компьютеры используют принципы квантовой механики для обработки информации. 
                          В отличие от классических компьютеров, которые оперируют битами со значениями 0 или 1, 
                          квантовые компьютеры используют кубиты, способные находиться в суперпозиции обоих состояний 
                          одновременно. Это позволяет им выполнять определённые вычисления экспоненциально быстрее.
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center mb-6">
                      <Icon name="ArrowDown" size={24} className="text-primary" />
                    </div>
                    <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
                      <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">Краткое содержание</div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon name="Sparkles" size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 text-sm leading-relaxed font-medium">
                            Квантовые компьютеры используют кубиты вместо битов, которые могут 
                            быть в нескольких состояниях одновременно. Это делает их намного быстрее 
                            в определённых задачах.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Больше, чем просто ответы
            </h2>
            <p className="text-lg text-gray-600">
              Полный набор инструментов для работы с текстом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Copy',
                title: 'Мгновенное копирование',
                description: 'Один клик — и ответ в буфере обмена'
              },
              {
                icon: 'Languages',
                title: 'Перевод на лету',
                description: 'Переводите любой текст без переключения вкладок'
              },
              {
                icon: 'Lightbulb',
                title: 'Детальные объяснения',
                description: 'Получите развёрнутый ответ с примерами'
              },
              {
                icon: 'Wand2',
                title: 'Упрощение текста',
                description: 'Сложные термины простыми словами'
              },
              {
                icon: 'Settings2',
                title: 'Настройка стиля',
                description: 'Выберите тон и формат ответов под себя'
              },
              {
                icon: 'Zap',
                title: 'Кастомные триггеры',
                description: 'Настройте удобный способ вызова ИИ'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Выберите свой тариф
            </h2>
            <p className="text-lg text-gray-600">
              Начните бесплатно, обновитесь когда будете готовы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">0₽</span>
                    <span className="text-gray-600">/месяц</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    '50 запросов в день',
                    'Базовые ответы ИИ',
                    'Копирование и перевод',
                    'Настройка триггера'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full h-12 border-2 border-gray-300 hover:bg-gray-50">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                Популярный
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">PRO</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">490₽</span>
                    <span className="text-gray-600">/месяц</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Безлимитные запросы',
                    'Расширенный ИИ-движок',
                    'Все функции Free +',
                    'Упрощение текста',
                    'Детальные объяснения',
                    'Кастомные стили ответов',
                    'Приоритетная поддержка'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30">
                  Перейти на PRO
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как установить расширение?',
                a: 'Перейдите в магазин расширений вашего браузера (Chrome Web Store, Firefox Add-ons), найдите Context.AI и нажмите "Установить". Процесс займёт несколько секунд.'
              },
              {
                q: 'Какие браузеры поддерживаются?',
                a: 'Context.AI работает в Chrome, Firefox, Edge и Safari. Мы постоянно добавляем поддержку новых браузеров.'
              },
              {
                q: 'Сколько стоит PRO-подписка?',
                a: 'PRO-план стоит 490₽/месяц и включает безлимитные запросы, расширенный ИИ-движок и все премиум-функции.'
              },
              {
                q: 'Можно ли изменить способ вызова ИИ?',
                a: 'Да, в настройках вы можете выбрать любой удобный триггер: двойной клик, комбинацию клавиш или иконку расширения.'
              },
              {
                q: 'Безопасны ли мои данные?',
                a: 'Мы не храним историю ваших запросов. Все данные обрабатываются в реальном времени и не сохраняются на наших серверах.'
              },
              {
                q: 'Что будет после превышения лимита в Free-плане?',
                a: 'После 50 запросов в день расширение предложит обновиться до PRO или подождать до следующего дня.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-0 shadow-md rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary to-purple-600 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Попробуйте прямо сейчас
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Установите расширение за 10 секунд и начните работать с текстом по-новому
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-lg shadow-xl">
                <Icon name="Download" size={20} className="mr-2" />
                Установить бесплатно
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Icon name="Sparkles" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold">Context.AI</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Возможности</a>
              <a href="#" className="hover:text-white transition-colors">Тарифы</a>
              <a href="#" className="hover:text-white transition-colors">Поддержка</a>
              <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © 2024 Context.AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;