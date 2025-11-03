// 입력 값의 규칙 조건 에러
export class ValidationRuleError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationRuleError";
    }
}

// 입력 값의 형식 조건 에러
export class ValidationFormError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationFormError";
    }
}
