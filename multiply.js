var L = 20,
r = [],
c = ",",
h = ["x"];
for (var i = 1, a = []; i <= L; i++) {
    h[i] = i;
    for (var j = 1; j <= L; j++) {
        a[j - 1] = i * j;
    }
    r[i] = a.join(c);
}
r[0] = h.join(c);
print(r.join("\n"));