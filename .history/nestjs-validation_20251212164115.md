# Validating Requests with Pipes in NestJS

This document explains what pipes are in NestJS, why they are important, how ValidationPipe improves security, and how decorators work with DTOs.

---

## 1. What is the purpose of pipes in NestJS?

The main purpose of pipes is to:

1. Validate incoming request data before it reaches the controller.
2. Transform data into the correct type (for example, string to number).
3. Prevent invalid or unexpected data from entering the application.
4. Keep controllers clean by moving validation logic out.
5. Improve overall code reliability and readability.

Pipes act as a checkpoint between the request and the controller logic.

---

## 2. How does ValidationPipe improve API security and data integrity?

ValidationPipe improves security and data integrity because:

1. It blocks requests with invalid or missing fields.
2. It ensures request data follows the expected DTO structure.
3. It reduces the risk of bad or malicious input.
4. It prevents runtime errors caused by unexpected data types.
5. It enforces consistent validation rules across the application.

Using a global ValidationPipe makes sure all endpoints follow the same rules.

---

## 3. What is the difference between built-in and custom pipes?

**Built-in pipes**:

1. Are provided by NestJS.
2. Handle common tasks like type conversion and validation.
3. Examples include ValidationPipe and ParseIntPipe.
4. Are easy to use and require little setup.

**Custom pipes**:

1. Are created by developers.
2. Handle special or business-specific logic.
3. Can validate or transform data in a custom way.
4. Are useful when built-in pipes are not enough.

Built-in pipes cover most cases, while custom pipes are for special needs.

---

## 4. How do decorators like @IsString() and @IsNumber() work with DTOs?

Decorators work with DTOs by:

1. Defining validation rules for each field.
2. Checking data types automatically during request handling.
3. Integrating with ValidationPipe to run validation.
4. Throwing errors when data does not match the rules.
5. Making DTOs self-documented and easier to understand.

This approach keeps validation logic clear and organised.

---

## Summary

Pipes help validate and transform request data before it reaches business logic.  
ValidationPipe improves security and data consistency, while DTO decorators define clear validation rules.  
Together, they help build clean, safe, and maintainable APIs.
