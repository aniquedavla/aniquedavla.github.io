;1-	Write a program to use string instructions to change all the s characters in a string to p. You must use scasb to locate the character. Cut and paste the array in memory to show your code is working.

.data

    string1 byte "sssssing", 0


.code

main proc
    mov edx, offset string1
    mov edi, offset string1
    mov al, "s"
    mov ecx, sizeof string1

loop:
    repne scasb 
    je repeat
    jmp complete

repeat: 
    mov byte ptr[edi - 1], "p"
    jmp loop

complete: 
    invoke ExitProcess, 0

main endp
end main


;1-	Assume we have a C program that has a function that accepts 4 integer values and finds the max of these values and return max. Write the same procedure in assembly language. The main code of the assembly language must pass the 4 values using the stack and then call the procedure max. You should have a local variable in procedure max for finding the maximum of the 4 numbers. Use ebp register in the procedure and show the cut and paste of memory to show the array. Cut and paste the stack before the function call and after the function call and explain all the values such as the return address and passed values.


num1         [ebp+8]
num2         [ebp+12]  
num3        [ebp+16]




.code
    push num4
    push num3
    push num2
    push num1
    call max

max:
    push    ebp
    mov     ebp, esp
    sub     esp, 4
    mov     eax, [ebp + 8] ; num 1
    mov     ebx, [ebp + 8] ; start at num1
    mov     ecx, 3

BACK    cmp  [ebx + 4], eax
    add ebx, 4
    ecx dec
    jg  THERE
    jnz complete

    THERE   mov eax, [ecx]  ; larget value is in eax reg
    jmp BACK

    pop ebp
    ret

        