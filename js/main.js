        // --- Configuration ---
        const API_BASE = "https://iptv-org.github.io/iptv/countries/";
        
        const CATEGORIES_MAP = {
            'Sports': 'رياضية',
            'News': 'أخبار',
            'Movies': 'أفلام',
            'Kids': 'أطفال',
            'Documentary': 'وثائقية',
            'Entertainment': 'ترفيه',
            'Music': 'موسيقى',
            'Educational': 'تعليمية',
            'Regional': 'محلية'
        };

        // Country Configuration with flags
        const COUNTRIES = [
            { code: 'ae', name: 'الإمارات', flag: '🇦🇪', category: 'ar' },
            { code: 'sa', name: 'السعودية', flag: '🇸🇦', category: 'ar' },
            { code: 'eg', name: 'مصر', flag: '🇪🇬', category: 'ar' },
            { code: 'ma', name: 'المغرب', flag: '🇲🇦', category: 'ar' },
            { code: 'dz', name: 'الجزائر', flag: '🇩🇿', category: 'ar' },
            { code: 'tn', name: 'تونس', flag: '🇹🇳', category: 'ar' },
            { code: 'lb', name: 'لبنان', flag: '🇱🇧', category: 'ar' },
            { code: 'jo', name: 'الأردن', flag: '🇯🇴', category: 'ar' },
            { code: 'iq', name: 'العراق', flag: '🇮🇶', category: 'ar' },
            { code: 'kw', name: 'الكويت', flag: '🇰🇼', category: 'ar' },
            { code: 'qa', name: 'قطر', flag: '🇶🇦', category: 'ar' },
            { code: 'bh', name: 'البحرين', flag: '🇧🇭', category: 'ar' },
            { code: 'om', name: 'عمان', flag: '🇴🇲', category: 'ar' },
            { code: 'ye', name: 'اليمن', flag: '🇾🇪', category: 'ar' },
            { code: 'sy', name: 'سوريا', flag: '🇸🇾', category: 'ar' },
            { code: 'sd', name: 'السودان', flag: '🇸🇩', category: 'ar' },
            { code: 'ly', name: 'ليبيا', flag: '🇱🇾', category: 'ar' },
            { code: 'us', name: 'الولايات المتحدة', flag: '🇺🇸', category: 'us' },
            { code: 'gb', name: 'المملكة المتحدة', flag: '🇬🇧', category: 'uk' },
            { code: 'fr', name: 'فرنسا', flag: '🇫🇷', category: 'fr' },
            { code: 'de', name: 'ألمانيا', flag: '🇩🇪', category: 'de' },
            { code: 'it', name: 'إيطاليا', flag: '🇮🇹', category: 'it' },
            { code: 'es', name: 'إسبانيا', flag: '🇪🇸', category: 'es' },
            { code: 'pt', name: 'البرتغال', flag: '🇵🇹', category: 'pt' },
            { code: 'tr', name: 'تركيا', flag: '🇹🇷', category: 'tr' },
            { code: 'gr', name: 'اليونان', flag: '🇬🇷', category: 'gr' },
            { code: 'ru', name: 'روسيا', flag: '🇷🇺', category: 'ru' },
            { code: 'cn', name: 'الصين', flag: '🇨🇳', category: 'cn' },
            { code: 'jp', name: 'اليابان', flag: '🇯🇵', category: 'jp' },
            { code: 'kr', name: 'كوريا الجنوبية', flag: '🇰🇷', category: 'kr' },
            { code: 'in', name: 'الهند', flag: '🇮🇳', category: 'in' },
            { code: 'pk', name: 'باكستان', flag: '🇵🇰', category: 'pk' },
            { code: 'br', name: 'البرازيل', flag: '🇧🇷', category: 'br' },
            { code: 'ar', name: 'الأرجنتين', flag: '🇦🇷', category: 'ar' },
            { code: 'mx', name: 'المكسيك', flag: '🇲🇽', category: 'mx' }
        ];

        // Footer Pages Content
        const FOOTER_PAGES = {
            'about': {
                title: 'من نحن',
                content: `
                    <h4>مرحباً بكم في LARACHE TV</h4>
                    <p>LARACHE TV هي منصة بث مباشر رائدة تهدف إلى تقديم تجربة مشاهدة استثنائية لمحبي المحتوى العربي والعالمي. نقدم مجموعة واسعة من القنوات التلفزيونية المباشرة في مختلف المجالات بما في ذلك الرياضة، الأخبار، الترفيه، الأفلام، والمزيد.</p>
                    
                    <h4>رؤيتنا</h4>
                    <p>أن نكون المنصة الرائدة في مجال البث المباشر في العالم العربي، من خلال تقديم محتوى متنوع وجودة استثنائية وواجهة مستخدم سهلة وسلسة.</p>
                    
                    <h4>رسالتنا</h4>
                    <p>توفير تجربة مشاهدة فريدة ومتميزة للمستخدمين العرب، مع الحرص على تقديم محتوى متنوع يلبي جميع الأذواق والاهتمامات.</p>
                    
                    <h4>مميزات المنصة</h4>
                    <ul>
                        <li>مجموعة واسعة من القنوات العربية والعالمية</li>
                        <li>واجهة مستخدم عربية سهلة الاستخدام</li>
                        <li>جودة بث عالية (HD، FHD، 4K)</li>
                        <li>ميزة المفضلة لحفظ القنوات المفضلة</li>
                        <li>دعم رفع قوائم M3U المخصصة</li>
                        <li>تصميم متجاوب يعمل على جميع الأجهزة</li>
                    </ul>
                    
                    <p>نحن نعمل باستمرار على تطوير وتحسين المنصة لتقديم أفضل تجربة ممكنة لمستخدمينا. إذا كان لديك أي اقتراحات أو ملاحظات، لا تتردد في التواصل معنا.</p>
                `
            },
            'contact': {
                title: 'اتصل بنا',
                content: `
                    <h4>تواصل مع فريق LARACHE TV</h4>
                    <p>نحن هنا لمساعدتك! إذا كان لديك أي استفسارات، اقتراحات، أو مشاكل تواجهها أثناء استخدام المنصة، فلا تتردد في التواصل معنا.</p>
                    
                    <h4>طرق التواصل</h4>
                    <ul>
                        <li><strong>البريد الإلكتروني:</strong> info@larachetv.com</li>
                        <li><strong>الهاتف:</strong> +212 600 000 000</li>
                        <li><strong>العنوان:</strong> المغرب، العرائش</li>
                        <li><strong>ساعات العمل:</strong> 24/7 لدعم المستخدمين</li>
                    </ul>
                    
                    <h4>وسائل التواصل الاجتماعي</h4>
                    <p>تابعنا على وسائل التواصل الاجتماعي لتصلك آخر التحديثات والأخبار:</p>
                    <ul>
                        <li><strong>فيسبوك:</strong> <a href="javascript:void(0);" onclick="showNotification('صفحة الفيسبوك قيد الإنشاء')">facebook.com/larachetv</a></li>
                        <li><strong>تويتر:</strong> <a href="javascript:void(0);" onclick="showNotification('حساب تويتر قيد الإنشاء')">twitter.com/larachetv</a></li>
                        <li><strong>إنستغرام:</strong> <a href="javascript:void(0);" onclick="showNotification('حساب إنستغرام قيد الإنشاء')">instagram.com/larachetv</a></li>
                        <li><strong>يوتيوب:</strong> <a href="javascript:void(0);" onclick="showNotification('قناة اليوتيوب قيد الإنشاء')">youtube.com/larachetv</a></li>
                    </ul>
                    
                    <h4>نموذج التواصل (قريباً)</h4>
                    <p>نعمل حالياً على تطوير نموذج اتصال مباشر يمكنك من إرسال رسائلك إلينا مباشرة من خلال الموقع. نعدك بأننا سنقوم بالرد على جميع الاستفسارات في أقرب وقت ممكن.</p>
                    
                    <p><strong>ملاحظة:</strong> نحن نقدّر جميع ملاحظاتكم واقتراحاتكم، فهي تساعدنا على تحسين وتطوير المنصة لتقديم أفضل تجربة ممكنة لكم.</p>
                `
            },
            'privacy': {
                title: 'سياسة الخصوصية',
                content: `
                    <h4>سياسة الخصوصية لـ LARACHE TV</h4>
                    <p>تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لمنصة LARACHE TV.</p>
                    
                    <h4>المعلومات التي نجمعها</h4>
                    <ul>
                        <li><strong>معلومات الاستخدام:</strong> نحن نجمع معلومات حول كيفية استخدامك للمنصة، بما في ذلك القنوات التي تشاهدها، وقت المشاهدة، والإعدادات المفضلة.</li>
                        <li><strong>المفضلة:</strong> نقوم بتخزين القنوات التي تقوم بإضافتها إلى المفضلة محلياً على جهازك (في localStorage).</li>
                        <li><strong>الإعدادات:</strong> نحمي إعداداتك المفضلة مثل وضع السمة (فاتح/داكن) محلياً على جهازك.</li>
                    </ul>
                    
                    <h4>كيف نستخدم معلوماتك</h4>
                    <ul>
                        <li>لتخصيص تجربة المشاهدة وتحسينها</li>
                        <li>لحفظ تفضيلاتك وإعداداتك</li>
                        <li>لتحليل استخدام المنصة وتحسين أدائها</li>
                        <li>لحل المشاكل الفنية والدعم الفني</li>
                    </ul>
                    
                    <h4>حماية المعلومات</h4>
                    <p>نحن نحمي معلوماتك من خلال:</p>
                    <ul>
                        <li>استخدام التخزين المحلي الآمن (localStorage)</li>
                        <li>عدم جمع معلومات شخصية حساسة</li>
                        <li>تحديث إجراءات الأمان بشكل مستمر</li>
                    </ul>
                    
                    <h4>ملفات تعريف الارتباط (Cookies)</h4>
                    <p>نستخدم تقنيات مماثلة لملفات تعريف الارتباط لتخزين إعداداتك وتحسين تجربة استخدام المنصة. يمكنك التحكم في هذه الإعدادات من خلال إعدادات المتصفح.</p>
                    
                    <h4>مشاركة المعلومات</h4>
                    <p>نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك معلومات مجمعة وغير شخصية لأغراض التحليل والإحصائيات.</p>
                    
                    <h4>حقوق المستخدم</h4>
                    <p>لديك الحق في:</p>
                    <ul>
                        <li>الوصول إلى معلوماتك المخزنة محلياً</li>
                        <li>حذف معلوماتك المخزنة محلياً</li>
                        <li>إدارة إعدادات الخصوصية من خلال متصفحك</li>
                    </ul>
                    
                    <h4>التغييرات على سياسة الخصوصية</h4>
                    <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإعلامك بأي تغييرات جوهرية من خلال المنصة.</p>
                    
                    <h4>الاتصال بنا</h4>
                    <p>إذا كان لديك أي استفسارات حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر البريد الإلكتروني: privacy@larachetv.com</p>
                `
            },
            'terms': {
                title: 'سياسة الاستخدام',
                content: `
                    <h4>شروط وأحكام استخدام LARACHE TV</h4>
                    <p>باستخدامك لمنصة LARACHE TV، فإنك توافق على الالتزام بشروط وأحكام الاستخدام هذه. يرجى قراءتها بعنايةp>
                    
                    <h4>القبول بالشروط</h4>
                    <p>باستخدامك للمنصة، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام.</p>
                    
                    <h4>استخدام المنصة</h4>
                    <ul>
                        <li>يجب ألا يقل عمر المستخدم عن 13 عاماً لاستخدام المنصة</li>
                        <li>يجب استخدام المنصة للأغراض الشخصية غير التجارية فقط</li>
                        <li>يمنع استخدام المنصة لأي أغراض غير قانونية أو غير أخلاقية</li>
                        <li>يمنع محاولة اختراق أو تعطيل عمل المنصة</li>
                        <li>يمنع إعادة توزيع أو بيع محتوى المنصة بدون إذن</li>
                    </ul>
                    
                    <h4>المحتوى والروابط الخارجية</h4>
                    <ul>
                        <li>نحن نقدم روابط لقنوات بث تابعة لأطراف ثالثة</li>
                        <li>لسنا مسؤولين عن محتوى أو جودة القنوات الخارجية</li>
                        <li>تقع مسؤولية التأكد من قانونية المشاهدة على المستخدم</li>
                        <li>نشجع المستخدمين على احترام حقوق النشر والملكية الفكرية</li>
                    </ul>
                    
                    <h4>المفضلة والإعدادات</h4>
                    <ul>
                        <li>يتم تخزين المفضلة والإعدادات محلياً على جهازك</li>
                        <li>قد تفقد هذه البيانات إذا قمت بحذف بيانات المتصفح</li>
                        <li>نحن لا نخزن هذه المعلومات على خوادمنا</li>
                        <li>أنت مسؤول عن الاحتفاظ بنسخة احتياطية من تفضيلاتك</li>
                    </ul>
                    
                    <h4>رفع ملفات M3U</h4>
                    <ul>
                        <li>أنت مسؤول عن محتوى ملفات M3U التي ترفعها</li>
                        <li>يجب أن تكون الملفات المرفوعة مملوكة لك أو مرخصة لك</li>
                        <li>يمنع رفع ملفات تحتوي على محتوى غير قانوني</li>
                        <li>نحتفظ بالحق في منع رفع ملفات معينة</li>
                    </ul>
                    
                    <h4>إخلاء المسؤولية</h4>
                    <ul>
                        <li>نحن لا نضمن استمرارية أو توفر جميع القنوات</li>
                        <li>قد تتغير جودة البث حسب القناة واتصال الإنترنت</li>
                        <li>لسنا مسؤولين عن أي أضرار ناتجة عن استخدام المنصة</li>
                        <li>يتم تقديم المنصة "كما هي" بدون أي ضمانات</li>
                    </ul>
                    
                    <h4>التعليق والحظر</h4>
                    <p>نحتفظ بالحق في تعليق أو حظر وصول أي مستخدم يخالف شروط الاستخدام هذه، دون إشعار مسبق.</p>
                    
                    <h4>التغييرات في الشروط</h4>
                    <p>قد نقوم بتحديث شروط الاستخدام هذه من وقت لآخر. استمرار استخدامك للمنصة بعد التغييرات يعني موافقتك على الشروط المحدثة.</p>
                    
                    <h4>القانون الحاكم</h4>
                    <p>تخضع هذه الشروط والأحكام لقوانين المملكة المغربية. أي نزاعات تنشأ عن استخدام المنصة ستخضع للاختصاص القضائي للمحاكم المغربية.</p>
                `
            }
        };

        // --- Global Variables ---
        let allChannels = [];
        let filteredChannels = [];
        function readStoredFavorites() {
            try {
                const stored = JSON.parse(localStorage.getItem('larachetv_favorites') || '[]');
                return Array.isArray(stored) ? stored.filter(item => item && typeof item.id === 'string' && typeof item.name === 'string' && typeof item.url === 'string') : [];
            } catch (error) {
                console.warn('تعذر قراءة المفضلة المحفوظة:', error);
                return [];
            }
        }
        let favorites = readStoredFavorites();
        let currentPlayingChannel = null;
        let player;
        let hls;
        let currentCategory = 'Sports';
        let showingFavorites = false;
        let currentCountry = 'all';
        let isSidebarOpen = false;
        let isLiveDropdownOpen = false;
        let isCountryDropdownOpen = false;
        let selectedUploadOption = 'url';
        
        // Load More variables
        let currentPage = 0;
        const CHANNELS_PER_PAGE = 20;
        let hasMoreChannels = true;

        // --- Initialize App ---
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize theme
            initTheme();
            
            // Initialize player
            initPlayer();
            
            // Initialize event listeners
            initEventListeners();
            
            // Initialize country dropdowns
            initCountryDropdowns();
            
            // Initialize category buttons
            renderCategoryButtons();
            
            const footerLinks = document.querySelector('.sidebar-footer-links');
            if (footerLinks) footerLinks.style.display = window.innerWidth <= 900 ? 'block' : 'none';
            loadCountryChannels('ma');
        });

        // --- Theme Management ---
        function initTheme() {
            let savedTheme = 'dark';
            try { savedTheme = localStorage.getItem('larachetv_theme') || 'dark'; } catch (_) {}
            const isLightTheme = savedTheme === 'light';
            
            if (isLightTheme) {
                document.body.classList.add('light-theme');
                document.getElementById('themeText').textContent = 'وضع الليل';
                document.getElementById('themeIcon').className = 'fas fa-moon';
            }
        }

        function toggleTheme() {
            const isLightTheme = document.body.classList.toggle('light-theme');
            const themeIcon = document.getElementById('themeIcon');
            const themeText = document.getElementById('themeText');
            
            if (isLightTheme) {
                themeIcon.className = 'fas fa-moon';
                themeText.textContent = 'وضع الليل';
                try { localStorage.setItem('larachetv_theme', 'light'); } catch (_) {}
            } else {
                themeIcon.className = 'fas fa-sun';
                themeText.textContent = 'وضع النهار';
                try { localStorage.setItem('larachetv_theme', 'dark'); } catch (_) {}
            }
        }

        // --- Sidebar Management ---
        function initEventListeners() {
            // Search input
            const searchInput = document.getElementById('searchInput');
            const searchClear = document.getElementById('searchClear');
            
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                filterChannelsBySearch(searchTerm);
                searchClear.style.display = searchTerm ? 'block' : 'none';
                
                // Hide load more button when searching
                if (searchTerm) {
                    if (document.getElementById('loadMoreContainer')) document.getElementById('loadMoreContainer').style.display = 'none';
                }
            });
            
            searchClear.addEventListener('click', () => {
                searchInput.value = '';
                filterChannelsBySearch('');
                searchClear.style.display = 'none';
                
                // Show load more button if there are more channels
                if (filteredChannels.length > CHANNELS_PER_PAGE) {
                    if (document.getElementById('loadMoreContainer')) document.getElementById('loadMoreContainer').style.display = 'block';
                }
            });
            
            // File input
            document.getElementById('fileInput').addEventListener('change', handleFileSelect);
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                const sidebar = document.getElementById('sidebar');
                const mobileToggle = document.getElementById('mobileMenuToggle');
                const countryDropdown = document.getElementById('countryDropdown');
                const liveDropdown = document.getElementById('liveDropdown');
                
                // Close sidebar on mobile
                if (window.innerWidth <= 900 && 
                    isSidebarOpen && 
                    !sidebar.contains(e.target) && 
                    !mobileToggle.contains(e.target)) {
                    closeSidebar();
                }
                
                // Close country dropdown
                if (isCountryDropdownOpen && 
                    !countryDropdown.contains(e.target)) {
                    closeCountryDropdown();
                }
                
                // Close live dropdown in sidebar
                if (isLiveDropdownOpen && 
                    !sidebar.contains(e.target)) {
                    closeLiveDropdown();
                }
            });
            
            // Close sidebar when pressing escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && isSidebarOpen) {
                    closeSidebar();
                }
            });
            
            // Listen for window resize to show/hide footer links in sidebar
            window.addEventListener('resize', () => {
                const footerLinks = document.querySelector('.sidebar-footer-links');
                if (footerLinks) footerLinks.style.display = window.innerWidth <= 900 ? 'block' : 'none';
            });
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const menuIcon = document.getElementById('menuIcon');
            
            isSidebarOpen = !isSidebarOpen;
            
            if (isSidebarOpen) {
                sidebar.classList.add('active');
                overlay.style.display = 'block';
                setTimeout(() => overlay.classList.add('active'), 10);
                menuIcon.className = 'fas fa-times';
            } else {
                closeSidebar();
            }
        }

        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const menuIcon = document.getElementById('menuIcon');
            
            isSidebarOpen = false;
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
            
            setTimeout(() => {
                if (!isSidebarOpen) {
                    overlay.style.display = 'none';
                }
            }, 300);
        }

        // --- Live TV Dropdown Management ---
        function toggleLiveDropdown(event) {
            event.preventDefault();
            event.stopPropagation();
            
            const dropdown = document.getElementById('liveDropdown');
            const dropdownIcon = event.currentTarget.querySelector('.dropdown-icon');
            
            if (isLiveDropdownOpen) {
                closeLiveDropdown();
            } else {
                isLiveDropdownOpen = true;
                dropdown.style.display = 'block';
                dropdownIcon.className = 'fas fa-chevron-up dropdown-icon';
                setTimeout(() => {
                    dropdown.classList.add('show');
                }, 10);
            }
        }

        function closeLiveDropdown() {
            const dropdown = document.getElementById('liveDropdown');
            const dropdownIcon = document.querySelector('.nav-link.active .dropdown-icon');
            
            isLiveDropdownOpen = false;
            dropdown.classList.remove('show');
            if (dropdownIcon) {
                dropdownIcon.className = 'fas fa-chevron-down dropdown-icon';
            }
            
            setTimeout(() => {
                if (!isLiveDropdownOpen) {
                    dropdown.style.display = 'none';
                }
            }, 300);
        }

        function initCountryDropdowns() {
            const sidebarDropdown = document.getElementById('liveDropdown');
            const mainDropdown = document.getElementById('countryDropdownContent');
            
            // Clear existing content
            sidebarDropdown.innerHTML = '';
            mainDropdown.innerHTML = '';
            
            // Add "All" option
            const allOption = document.createElement('li');
            allOption.innerHTML = `
                <a class="country-dropdown-item active" onclick="loadAllChannels(event)">
                    <span class="country-flag">🌍</span>
                    <span>جميع الدول</span>
                </a>
            `;
            sidebarDropdown.appendChild(allOption);
            
            const allMainOption = document.createElement('div');
            allMainOption.className = 'country-item active';
            allMainOption.setAttribute('onclick', 'selectCountry("all")');
            allMainOption.innerHTML = `
                <span class="country-flag">🌍</span>
                <span>جميع الدول</span>
            `;
            mainDropdown.appendChild(allMainOption);
            
            // Add individual countries
            COUNTRIES.forEach(country => {
                // Sidebar dropdown
                const sidebarItem = document.createElement('li');
                sidebarItem.innerHTML = `
                    <a class="country-dropdown-item" onclick="loadCountryChannels('${country.code}')">
                        <span class="country-flag">${country.flag}</span>
                        <span>${country.name}</span>
                    </a>
                `;
                sidebarDropdown.appendChild(sidebarItem);
                
                // Main dropdown
                const mainItem = document.createElement('div');
                mainItem.className = 'country-item';
                mainItem.setAttribute('onclick', `selectCountry('${country.code}')`);
                mainItem.innerHTML = `
                    <span class="country-flag">${country.flag}</span>
                    <span>${country.name}</span>
                `;
                mainDropdown.appendChild(mainItem);
            });
        }

        function toggleCountryDropdown() {
            const dropdownBtn = document.getElementById('countryDropdownBtn');
            const dropdownContent = document.getElementById('countryDropdownContent');
            
            isCountryDropdownOpen = !isCountryDropdownOpen;
            
            if (isCountryDropdownOpen) {
                dropdownBtn.classList.add('open');
                dropdownContent.classList.add('show');
            } else {
                closeCountryDropdown();
            }
        }

        function closeCountryDropdown() {
            const dropdownBtn = document.getElementById('countryDropdownBtn');
            const dropdownContent = document.getElementById('countryDropdownContent');
            
            isCountryDropdownOpen = false;
            dropdownBtn.classList.remove('open');
            dropdownContent.classList.remove('show');
        }

        function selectCountry(countryCode) {
            const dropdownContent = document.getElementById('countryDropdownContent');
            const countryItems = dropdownContent.querySelectorAll('.country-item');
            
            // Update active state
            countryItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('onclick')?.includes(`'${countryCode}'`)) {
                    item.classList.add('active');
                }
            });
            
            // Update button text
            if (countryCode === 'all') {
                document.getElementById('selectedCountry').textContent = 'جميع الدول';
                loadAllChannels();
            } else {
                const country = COUNTRIES.find(c => c.code === countryCode);
                if (country) {
                    document.getElementById('selectedCountry').textContent = country.name;
                    loadCountryChannels(countryCode);
                }
            }
            
            closeCountryDropdown();
        }

        // --- Player Management ---
        function initPlayer() {
            const video = document.getElementById('player');

            if (Hls.isSupported()) {
                hls = new Hls({
                    enableWorker: true,
                    lowLatencyMode: true,
                    backBufferLength: 90
                });
                
                hls.attachMedia(video);
                
                hls.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal) {
                        console.error('HLS Error:', data);
                        showNotification('حدث خطأ في تشغيل الفيديو');
                    }
                });
            }

            player = new Plyr(video, {
                controls: [
                    'play-large', 'play', 'progress', 'current-time', 
                    'mute', 'volume', 'captions', 'settings', 'pip', 
                    'airplay', 'fullscreen'
                ],
                settings: ['quality', 'speed'],
                i18n: { 
                    restart: 'إعادة', 
                    play: 'تشغيل', 
                    pause: 'إيقاف', 
                    quality: 'الجودة',
                    speed: 'السرعة'
                }
            });
        }

        // --- Channel Management with Load More ---
        async function loadAllChannels(event = null) {
            if (event) event.stopPropagation();
            
            currentCountry = 'all';
            currentCategory = 'Sports';
            currentPage = 0;
            hasMoreChannels = true;
            
            // Show loading state
            showLoadingState();
            document.getElementById('sectionTitle').textContent = 'جميع القنوات';
            
            try {
                // Load channels from multiple countries
                const arabCountries = COUNTRIES.filter(c => c.category === 'ar').slice(0, 5);
                let allChannelsData = [];
                
                for (const country of arabCountries) {
                    try {
                        const response = await fetch(`${API_BASE}${country.code}.m3u`);
                        if (response.ok) {
                            const data = await response.text();
                            const countryChannels = parseM3U(data, 'Sports', country.name);
                            allChannelsData = [...allChannelsData, ...countryChannels];
                        }
                    } catch (err) {
                        console.error(`Error loading ${country.name}:`, err);
                    }
                }
                
                allChannels = allChannelsData;
                filteredChannels = [...allChannels];
                renderChannels();
                
                // Show/hide load more button
                if (filteredChannels.length > CHANNELS_PER_PAGE) {
                    document.getElementById('loadMoreContainer').style.display = 'block';
                } else {
                    document.getElementById('loadMoreContainer').style.display = 'none';
                }
            } catch (err) {
                console.error('Error loading all channels:', err);
                showErrorState('حدث خطأ في تحميل القنوات');
                
                // Fallback to sample data
                allChannels = getSampleChannels('all');
                filteredChannels = [...allChannels];
                renderChannels();
                
                // Show load more button
                if (filteredChannels.length > CHANNELS_PER_PAGE) {
                    document.getElementById('loadMoreContainer').style.display = 'block';
                }
            }
        }

        async function loadCountryChannels(countryCode) {
            showingFavorites = false;
            currentCountry = countryCode;
            currentCategory = 'Sports';
            currentPage = 0;
            hasMoreChannels = true;
            
            const country = COUNTRIES.find(c => c.code === countryCode);
            if (!country) return;
            
            // Show loading state
            showLoadingState();
            document.getElementById('sectionTitle').textContent = `قنوات ${country.name}`;
            
            try {
                const response = await fetch(`${API_BASE}${countryCode}.m3u`);
                if (!response.ok) throw new Error('فشل التحميل');
                
                const data = await response.text();
                allChannels = parseM3U(data, 'Sports', country.name);
                filteredChannels = [...allChannels];
                renderChannels();
                
                // Show/hide load more button
                if (filteredChannels.length > CHANNELS_PER_PAGE) {
                    document.getElementById('loadMoreContainer').style.display = 'block';
                } else {
                    document.getElementById('loadMoreContainer').style.display = 'none';
                }
            } catch (err) {
                console.error('Error loading country:', err);
                showErrorState('حدث خطأ في تحميل القنوات');
                
                allChannels = [];
                filteredChannels = [];
                renderChannels();
                showNotification('تعذر تحميل القنوات حالياً. تحقق من الاتصال ثم أعد المحاولة.');
            }
        }

        function renderCategoryButtons() {
            const container = document.getElementById('categoryButtons');
            container.innerHTML = '';
            
            Object.keys(CATEGORIES_MAP).forEach(cat => {
                const isActive = cat === currentCategory;
                container.innerHTML += `
                    <button class="category-btn ${isActive ? 'active' : ''}" onclick="changeCategory('${cat}')">
                        ${CATEGORIES_MAP[cat]}
                    </button>
                `;
            });
        }

        function changeCategory(catName) {
            currentCategory = catName;
            currentPage = 0;
            hasMoreChannels = true;
            filterChannelsByCategory();
        }

        function filterChannelsByCategory() {
            if (currentCategory === 'Sports') {
                filteredChannels = [...allChannels];
            } else {
                filteredChannels = allChannels.filter(ch => 
                    ch.category.toLowerCase().includes(currentCategory.toLowerCase())
                );
            }
            
            // Update active category button
            const categoryButtons = document.querySelectorAll('#categoryButtons .category-btn');
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent === CATEGORIES_MAP[currentCategory]) {
                    btn.classList.add('active');
                }
            });
            
            // Reset pagination
            currentPage = 0;
            renderChannels();
            
            // Show/hide load more button
            if (filteredChannels.length > CHANNELS_PER_PAGE) {
                document.getElementById('loadMoreContainer').style.display = 'block';
            } else {
                document.getElementById('loadMoreContainer').style.display = 'none';
            }
        }

        function parseM3U(content, category, country = '') {
            const lines = content.split('\n');
            const channels = [];
            let currentChannel = {};

            lines.forEach(line => {
                line = line.trim();
                
                if (line.startsWith('#EXTINF:')) {
                    const logoMatch = line.match(/tvg-logo="([^"]*)"/);
                    const nameParts = line.split(',');
                    const name = nameParts[nameParts.length - 1]
                        .replace(/\|.*$/, '')
                        .trim();
                    
                    // Detect quality
                    const qualityMatch = line.match(/(HD|FHD|4K|UHD|SD)/i);
                    const quality = qualityMatch ? qualityMatch[0].toUpperCase() : 'SD';
                    
                    // Detect category
                    const categoryMatch = line.match(/group-title="([^"]*)"/);
                    const channelCategory = categoryMatch ? categoryMatch[1] : category;
                    
                    currentChannel = {
                        name,
                        logo: logoMatch ? logoMatch[1] : 'https://cdn-icons-png.flaticon.com/512/2718/2718224.png',
                        quality,
                        category: channelCategory,
                        country,
                        rawLine: line,
                        isFavorite: false,
                        type: 'live'
                    };
                } else if (/^https?:\/\//i.test(line)) {
                    let streamUrl;
                    try { streamUrl = new URL(line); } catch (_) { currentChannel = {}; return; }
                    if (!['http:', 'https:'].includes(streamUrl.protocol)) { currentChannel = {}; return; }
                    currentChannel.url = streamUrl.href;
                    currentChannel.id = 'ch-' + Array.from(streamUrl.href).reduce((hash, char) => ((hash * 31) + char.charCodeAt(0)) >>> 0, 7).toString(36);
                    
                    // Check if favorite
                    currentChannel.isFavorite = favorites.some(f => f.id === currentChannel.id);
                    
                    channels.push({ ...currentChannel });
                    currentChannel = {};
                }
            });
            
            return channels;
        }

        function getSampleChannels(country) {
            const sampleLogos = [
                'https://cdn-icons-png.flaticon.com/512/2718/2718224.png',
                'https://cdn-icons-png.flaticon.com/512/2503/2503442.png',
                'https://cdn-icons-png.flaticon.com/512/2503/2503485.png',
                'https://cdn-icons-png.flaticon.com/512/2503/2503461.png'
            ];
            
            const channels = [];
            for (let i = 1; i <= 50; i++) {
                channels.push({
                    id: `sample-${country}-${i}`,
                    name: `${country !== 'all' ? country + ' - ' : ''}قناة ${i}`,
                    logo: sampleLogos[i % sampleLogos.length],
                    quality: i % 3 === 0 ? 'HD' : i % 3 === 1 ? 'FHD' : 'SD',
                    category: i % 2 === 0 ? 'Sports' : 'News',
                    country: country !== 'all' ? country : 'متعدد',
                    url: `https://example.com/stream${i}.m3u8`,
                    isFavorite: false,
                    type: 'live'
                });
            }
            return channels;
        }

        function filterChannelsBySearch(searchTerm) {
            if (showingFavorites) {
                filteredChannels = favorites.map(saved => {
                    const channel = allChannels.find(item => item.id === saved.id);
                    return channel ? { ...channel, isFavorite: true } : { ...saved, category: 'Favorites', country: '', quality: 'SD', isFavorite: true };
                }).filter(channel => !searchTerm || String(channel.name || '').toLowerCase().includes(searchTerm));
                currentPage = 0;
                renderChannels();
                return;
            }
            if (!searchTerm) {
                if (currentCategory === 'Sports') {
                    filteredChannels = [...allChannels];
                } else {
                    filteredChannels = allChannels.filter(ch => 
                        ch.category.toLowerCase().includes(currentCategory.toLowerCase())
                    );
                }
            } else {
                filteredChannels = allChannels.filter(ch => 
                    ch.name.toLowerCase().includes(searchTerm) ||
                    (ch.country && ch.country.toLowerCase().includes(searchTerm)) ||
                    (ch.category && ch.category.toLowerCase().includes(searchTerm))
                );
            }
            
            // Reset pagination when searching
            currentPage = 0;
            renderChannels();
        }

        function renderChannels() {
            const grid = document.getElementById('grid');
            if (!grid) return;
            if (filteredChannels.length === 0) {
                grid.replaceChildren();
                const empty = document.createElement('div');
                empty.className = 'empty-state';
                const icon = document.createElement('i');
                icon.className = 'fas fa-search';
                const message = document.createElement('p');
                message.textContent = 'لا توجد قنوات تطابق البحث';
                empty.append(icon, message);
                grid.appendChild(empty);
                updateLoadMoreButton();
                return;
            }
            const startIndex = currentPage * CHANNELS_PER_PAGE;
            const endIndex = Math.min(startIndex + CHANNELS_PER_PAGE, filteredChannels.length);
            if (currentPage === 0) grid.replaceChildren();
            filteredChannels.slice(startIndex, endIndex).forEach(channel => {
                const card = document.createElement('button');
                card.type = 'button';
                card.className = 'channel-card' + (channel.id === currentPlayingChannel?.id ? ' active' : '');
                card.setAttribute('aria-label', 'تشغيل ' + String(channel.name || 'قناة'));
                const fav = document.createElement('span');
                fav.className = 'fas fa-star fav-icon' + (channel.isFavorite ? ' active' : '');
                fav.setAttribute('role', 'button');
                fav.setAttribute('tabindex', '0');
                fav.setAttribute('aria-label', channel.isFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة');
                const toggle = event => {
                    event.stopPropagation();
                    toggleFavorite(event, channel.id, 'live');
                };
                fav.addEventListener('click', toggle);
                fav.addEventListener('keydown', event => {
                    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(event); }
                });
                const fallbackLogo = 'https://cdn-icons-png.flaticon.com/512/2718/2718224.png';
                let logoUrl = fallbackLogo;
                try {
                    const parsedLogo = new URL(channel.logo || fallbackLogo, window.location.href);
                    if (parsedLogo.protocol === 'https:' || parsedLogo.protocol === 'http:') logoUrl = parsedLogo.href;
                } catch (_) {}
                const logo = document.createElement('img');
                logo.src = logoUrl;
                logo.alt = String(channel.name || 'شعار القناة');
                logo.loading = 'lazy';
                logo.referrerPolicy = 'no-referrer';
                logo.onerror = () => { logo.onerror = null; logo.src = fallbackLogo; };
                const title = document.createElement('h4');
                title.textContent = String(channel.name || 'قناة بدون اسم');
                const country = document.createElement('div');
                country.className = 'channel-country';
                country.textContent = String(channel.country || '');
                const quality = document.createElement('span');
                quality.className = 'quality-badge';
                quality.textContent = String(channel.quality || 'SD');
                card.append(fav, logo, title);
                if (country.textContent) card.appendChild(country);
                card.appendChild(quality);
                card.addEventListener('click', () => playChannel(channel));
                grid.appendChild(card);
            });
            updateLoadMoreButton();
        }

        function loadMoreChannels() {
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (!loadMoreBtn) return;
            
            // Show loading state
            loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
            loadMoreBtn.disabled = true;
            loadMoreBtn.classList.add('loading');
            
            // Simulate loading delay
            setTimeout(() => {
                currentPage++;
                renderChannels();
                
                // Reset button state
                loadMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> تحميل المزيد';
                loadMoreBtn.disabled = false;
                loadMoreBtn.classList.remove('loading');
            }, 800);
        }

        function updateLoadMoreButton() {
            const loadMoreContainer = document.getElementById('loadMoreContainer');
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (!loadMoreContainer || !loadMoreBtn) return;
            
            const totalChannels = filteredChannels.length;
            const displayedChannels = Math.min((currentPage + 1) * CHANNELS_PER_PAGE, totalChannels);
            
            if (displayedChannels >= totalChannels) {
                loadMoreContainer.style.display = 'none';
            } else {
                loadMoreContainer.style.display = 'block';
                loadMoreBtn.innerHTML = `<i class="fas fa-chevron-down"></i> تحميل المزيد (${displayedChannels}/${totalChannels})`;
            }
        }

        // --- Play Channel ---
        function playChannel(channel) {
            // Update current channel
            currentPlayingChannel = channel;
            
            // Update UI
            document.getElementById('channelTitle').textContent = channel.name;
            document.getElementById('contentTypeBadge').innerHTML = '<i class="fas fa-circle"></i> البث المباشر';
            document.getElementById('channelQuality').style.display = 'block';
            document.getElementById('qualityValue').textContent = channel.quality;
            
            // Update favorite button
            updateCurrentFavoriteButton();
            
            // Remove active class from all cards
            document.querySelectorAll('.channel-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Add active class to current channel card
            const currentCard = document.querySelector(`.channel-card[onclick*="${channel.id}"]`);
            if (currentCard) {
                currentCard.classList.add('active');
            }
            
            // Play video
            if (Hls.isSupported()) {
                hls.loadSource(channel.url);
                hls.attachMedia(document.getElementById('player'));
            } else if (document.getElementById('player').canPlayType('application/vnd.apple.mpegurl')) {
                document.getElementById('player').src = channel.url;
            }
            
            player.play();
        }

        // --- Favorites Management ---
        function toggleFavorite(event, itemId, type) {
            if (event) event.stopPropagation();
            const item = allChannels.find(channel => channel.id === itemId);
            const index = favorites.findIndex(favorite => favorite.id === itemId);
            if (!item && index === -1) return;

            if (index === -1) {
                favorites.push({
                    id: item.id, name: item.name, logo: item.logo, url: item.url,
                    type: 'live', addedAt: Date.now()
                });
                item.isFavorite = true;
                showNotification('تمت إضافة إلى المفضلة');
            } else {
                favorites.splice(index, 1);
                if (item) item.isFavorite = false;
                showNotification('تمت إزالة من المفضلة');
            }

            try { localStorage.setItem('larachetv_favorites', JSON.stringify(favorites)); }
            catch (error) { console.warn('تعذر حفظ المفضلة محلياً:', error); }

            if (showingFavorites) {
                showFavorites();
            } else {
                if (event && event.target && event.target.classList) event.target.classList.toggle('active', Boolean(item && item.isFavorite));
                updateCurrentFavoriteButton();
            }
        }

        function toggleCurrentFavorite() {
            if (!currentPlayingChannel) return;
            
            const index = favorites.findIndex(f => f.id === currentPlayingChannel.id);
            const favBtn = document.getElementById('currentChannelFavorite');
            const icon = favBtn.querySelector('i');
            
            if (index === -1) {
                // Add to favorites
                favorites.push({
                    id: currentPlayingChannel.id,
                    name: currentPlayingChannel.name,
                    logo: currentPlayingChannel.logo,
                    url: currentPlayingChannel.url,
                    type: 'live',
                    addedAt: Date.now()
                });
                favBtn.classList.add('active');
                icon.className = 'fas fa-star';
                showNotification('تمت إضافة القناة إلى المفضلة');
                
                // Update all favorite icons
                updateAllFavoriteIcons(currentPlayingChannel.id, true);
            } else {
                // Remove from favorites
                favorites.splice(index, 1);
                favBtn.classList.remove('active');
                icon.className = 'far fa-star';
                showNotification('تمت إزالة القناة من المفضلة');
                
                // Update all favorite icons
                updateAllFavoriteIcons(currentPlayingChannel.id, false);
            }
            
            // Save to localStorage
            localStorage.setItem('larachetv_favorites', JSON.stringify(favorites));
        }

        function updateCurrentFavoriteButton() {
            if (!currentPlayingChannel) return;
            
            const isFavorite = favorites.some(f => f.id === currentPlayingChannel.id);
            const favBtn = document.getElementById('currentChannelFavorite');
            const icon = favBtn.querySelector('i');
            
            favBtn.style.display = 'flex';
            favBtn.classList.toggle('active', isFavorite);
            icon.className = isFavorite ? 'fas fa-star' : 'far fa-star';
        }

        function updateAllFavoriteIcons(itemId, isFavorite) {
            // Update in allChannels array
            const channel = allChannels.find(ch => ch.id === itemId);
            if (channel) {
                channel.isFavorite = isFavorite;
            }
            
            // Update icon in grid
            const favIcon = document.querySelector(`.fav-icon[onclick*="${itemId}"]`);
            if (favIcon) {
                favIcon.classList.toggle('active', isFavorite);
            }
        }

        function showFavorites() {
            showingFavorites = true;
            currentCategory = 'Favorites';
            currentPage = 0;
            document.getElementById('sectionTitle').textContent = 'القنوات المفضلة';
            filteredChannels = favorites.map(saved => {
                const channel = allChannels.find(item => item.id === saved.id);
                return channel ? { ...channel, isFavorite: true } : { ...saved, category: 'Favorites', country: '', quality: 'SD', isFavorite: true };
            });
            const term = document.getElementById('searchInput')?.value.trim().toLowerCase();
            if (term) filteredChannels = filteredChannels.filter(channel => String(channel.name || '').toLowerCase().includes(term));
            renderChannels();
            if (window.innerWidth <= 900 && isSidebarOpen) closeSidebar();
        }

        // --- Footer Modal Functions ---
        function openFooterModal(page) {
            if (!FOOTER_PAGES[page]) return;
            
            const modal = document.getElementById('footerModal');
            const title = document.getElementById('footerModalTitle');
            const body = document.getElementById('footerModalBody');
            if (!modal || !title || !body) {
                showNotification('هذه الصفحة غير متاحة في هذه الواجهة');
                return;
            }
            
            // Set content
            title.innerHTML = `<i class="fas fa-${getPageIcon(page)}"></i> ${FOOTER_PAGES[page].title}`;
            body.innerHTML = FOOTER_PAGES[page].content;
            
            // Show modal
            modal.style.display = 'flex';
            
            // Close sidebar on mobile if open
            if (window.innerWidth <= 900 && isSidebarOpen) {
                closeSidebar();
            }
        }

        function getPageIcon(page) {
            const icons = {
                'about': 'info-circle',
                'contact': 'envelope',
                'privacy': 'shield-alt',
                'terms': 'file-contract'
            };
            return icons[page] || 'info-circle';
        }

        // --- Upload Modal Functions ---
        function selectUploadOption(option) {
            selectedUploadOption = option;
            
            // Update active state
            document.getElementById('urlOption').classList.toggle('active', option === 'url');
            document.getElementById('fileOption').classList.toggle('active', option === 'file');
            
            // Show/hide input groups
            document.getElementById('urlInputGroup').classList.toggle('show', option === 'url');
            document.getElementById('fileInputGroup').classList.toggle('show', option === 'file');
            
            // Update button text
            document.getElementById('uploadBtn').textContent = option === 'url' ? 'تحميل القنوات' : 'رفع الملف';
        }

        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            // Check file size (max 10MB)
            if (file.size > 10 * 1024 * 1024) {
                showNotification('حجم الملف كبير جداً (الحد الأقصى: 10MB)');
                return;
            }
            
            // Check file type
            if (!file.name.toLowerCase().endsWith('.m3u') && !file.name.toLowerCase().endsWith('.m3u8')) {
                showNotification('يرجى اختيار ملف M3U صالح');
                return;
            }
            
            // Show file preview
            const filePreview = document.getElementById('filePreview');
            const fileName = document.getElementById('fileName');
            const fileSize = document.getElementById('fileSize');
            
            fileName.textContent = file.name;
            fileSize.textContent = formatFileSize(file.size);
            filePreview.classList.add('show');
        }

        function formatFileSize(bytes) {
            if (bytes < 1024) return bytes + ' بايت';
            else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' كيلوبايت';
            else return (bytes / 1048576).toFixed(1) + ' ميجابايت';
        }

        // --- Helper Functions ---
        function showLoadingState() {
            document.getElementById('grid').innerHTML = `
                <div class="loading-state">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>جاري التحميل...</p>
                </div>
            `;
            document.getElementById('loadMoreContainer').style.display = 'none';
        }

        function showErrorState(message) {
            document.getElementById('grid').innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>${message}</p>
                    <button class="btn btn-primary" onclick="loadCountryChannels(currentCountry)" style="margin-top: 15px;">
                        إعادة المحاولة
                    </button>
                </div>
            `;
            document.getElementById('loadMoreContainer').style.display = 'none';
        }

        // --- Modal Functions ---
        function openUploadModal() {
            document.getElementById('uploadModal').style.display = 'flex';
            
            // Reset file input
            document.getElementById('fileInput').value = '';
            document.getElementById('filePreview').classList.remove('show');
            
            // Close sidebar on mobile
            if (window.innerWidth <= 900) {
                closeSidebar();
            }
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function closeModalOnOverlay(event, modalId) {
            if (event.target.classList.contains('modal-overlay') || 
                event.target.classList.contains('footer-modal')) {
                closeModal(modalId);
            }
        }

        async function loadCustomPlaylist() {
            if (selectedUploadOption === 'url') {
                await loadFromURL();
            } else {
                await loadFromFile();
            }
        }

        async function loadFromURL() {
            const url = document.getElementById('m3uUrl').value.trim();
            if (!url) {
                showNotification('يرجى إدخال رابط صالح');
                return;
            }
            
            let playlistUrl;
            try {
                playlistUrl = new URL(url);
                if (!['http:', 'https:'].includes(playlistUrl.protocol)) throw new Error('protocol');
            } catch (_) {
                showNotification('يرجى استخدام رابط HTTP أو HTTPS صالح');
                return;
            }
            try {
                showNotification('جاري تحميل القنوات...');
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 15000);
                const response = await fetch(playlistUrl.href, { signal: controller.signal, redirect: 'error' });
                clearTimeout(timeoutId);
                if (!response.ok) throw new Error('الرابط غير صالح');
                const declaredLength = Number(response.headers.get('content-length') || 0);
                if (declaredLength > 10 * 1024 * 1024) throw new Error('الملف أكبر من الحد المسموح');
                const data = await response.text();
                if (data.length > 10 * 1024 * 1024) throw new Error('الملف أكبر من الحد المسموح');
                allChannels = parseM3U(data, 'custom', 'مخصص');
                
                document.getElementById('sectionTitle').textContent = 'قائمة مخصصة';
                filteredChannels = [...allChannels];
                currentPage = 0;
                renderChannels();
                closeModal('uploadModal');
                showNotification('تم تحميل القائمة المخصصة بنجاح');
                
                // Show load more button if needed
                if (filteredChannels.length > CHANNELS_PER_PAGE) {
                    document.getElementById('loadMoreContainer').style.display = 'block';
                }
            } catch (e) {
                showNotification('الرابط غير صالح أو لا يعمل');
                console.error(e);
            }
        }

        async function loadFromFile() {
            const fileInput = document.getElementById('fileInput');
            if (!fileInput.files || fileInput.files.length === 0) {
                showNotification('يرجى اختيار ملف');
                return;
            }
            
            const file = fileInput.files[0];
            const progressBar = document.getElementById('progressBar');
            const uploadProgress = document.getElementById('uploadProgress');
            
            try {
                uploadProgress.classList.add('show');
                progressBar.style.width = '30%';
                
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    progressBar.style.width = '70%';
                    
                    try {
                        const data = e.target.result;
                        allChannels = parseM3U(data, 'custom', 'مخصص');
                        
                        progressBar.style.width = '100%';
                        
                        setTimeout(() => {
                            document.getElementById('sectionTitle').textContent = 'قائمة مخصصة';
                            filteredChannels = [...allChannels];
                            currentPage = 0;
                            renderChannels();
                            closeModal('uploadModal');
                            showNotification('تم رفع الملف بنجاح');
                            
                            // Show load more button if needed
                            if (filteredChannels.length > CHANNELS_PER_PAGE) {
                                document.getElementById('loadMoreContainer').style.display = 'block';
                            }
                            
                            // Reset progress
                            setTimeout(() => {
                                uploadProgress.classList.remove('show');
                                progressBar.style.width = '0%';
                            }, 500);
                        }, 500);
                    } catch (error) {
                        showNotification('خطأ في قراءة الملف');
                        console.error(error);
                    }
                };
                
                reader.onerror = function() {
                    showNotification('خطأ في قراءة الملف');
                    uploadProgress.classList.remove('show');
                    progressBar.style.width = '0%';
                };
                
                reader.readAsText(file);
                
            } catch (e) {
                showNotification('حدث خطأ أثناء رفع الملف');
                console.error(e);
                uploadProgress.classList.remove('show');
                progressBar.style.width = '0%';
            }
        }

        // --- Notification System ---
        function showNotification(message) {
            // Remove existing notification
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // Create new notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.style.cssText = `
                position: fixed;
                bottom: 30px;
                left: 30px;
                background: var(--bg-card);
                color: var(--text-main);
                padding: 15px 25px;
                border-radius: 12px;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
                box-shadow: 0 8px 30px rgba(0,0,0,0.2);
                border: 1px solid var(--border-color);
                display: flex;
                align-items: center;
                gap: 12px;
                max-width: 400px;
                backdrop-filter: blur(10px);
            `;
            
            notification.innerHTML = `
                <i class="fas fa-check-circle" style="color: #10b981; font-size: 18px;"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transition = 'opacity 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
    
    
