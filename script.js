// --- LocalStorage Utility Functions (Pure-ish) ---

// localStorage-д todo жагсаалтыг хадгалах функц
const saveTodos = (list) => {
  // list-ийг JSON формат руу хөрвүүлээд localStorage-д "todos" түлхүүрээр хадгална
};

// localStorage-с хадгалагдсан todo жагсаалтыг унших функц
const loadTodos = () => {
  // "todos" түлхүүрээр хадгалагдсан өгөгдлийг localStorage-с авна
  // Хэрвээ өгөгдөл байхгүй бол хоосон массив буцаана
};

// --- State ---
// Todo жагсаалтын анхны төлөвийг localStorage-с ачаална
let todos;

// --- Pure functions ---

// Todo нэмэх функц
const addTodo = (list, text) => {
  // Хэрвээ text хоосон биш бол шинэ todo объект үүсгээд хуучин list-д нэмж буцаана
  // Хэрвээ хоосон бол list-ийг өөрчлөхгүй буцаана
};

// Todo-ийн "done" төлөвийг өөрчлөх функц

// Todo устгах функц
const deleteTodo = (list, id) => {
  // list дотроос id нь тохирох элементийг filter ашиглан хасна
  // шинэ list буцаана
};

// Todo жагсаалтыг дэлгэцэнд харуулах функц
const render = (list) => {
  // HTML дээрх <ul> элементийг олж авна
  // list-ийн бүх элементийг давтаж <li> үүсгэнэ
  // done=true бол текстэнд “line-through” стиль хэрэглэнэ
  // Тогтсон id бүхий toggle ба delete товч үүсгэнэ
  // Эдгээрийг <ul> дотор оруулна
};

// --- Event handlers (impure хэсэг) ---

// Todo нэмэх товч дарахад ажиллах функц
const handleAdd = () => {
  // Input-аас хэрэглэгчийн оруулсан текстийг авна
  // addTodo функц ашиглан шинэ todo жагсаалт үүсгэнэ
  // Input-ыг хоослоно
  // Шинэ жагсаалтыг localStorage-д хадгална
  // render функц ашиглан UI-г шинэчилнэ
};

// Todo-ийн төлөвийг солих товч дарахад ажиллах функц
const handleToggle = (id) => {
  // toggleTodo функц ашиглан todo жагсаалтыг шинэчилнэ
  // localStorage-д хадгална
  // render функц ашиглан UI-г шинэчилнэ
};

// Todo устгах товч дарахад ажиллах функц
const handleDelete = (id) => {
  // deleteTodo функц ашиглан жагсаалтаас тухайн todo-г устгана
  // localStorage-д хадгална
  // render функц ашиглан UI-г шинэчилнэ
};

// --- Init ---
// "Add" товчийг DOM-с олж аваад click эвентэд handleAdd функцыг холбох
// Хөтөч ачаалахад хадгалагдсан todos-ийг render функцээр дэлгэцэнд харуулах
