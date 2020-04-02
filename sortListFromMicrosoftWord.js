const fs = require('fs')

const sortList = input => {
  const [_, ...data] = input.replace(/[\r\n]/gm, '').split(/\d\.\s(?=[a-zA-ZА-Яа-я])/g)
  const result = data
    .sort()
    .map((item, i) => `${i + 1}. ${item}`)
    .join('\n')
  console.log('Writing data to the file...')
  fs.writeFile('result.txt', result, () => console.log('Done.'))
}

sortList(`Сестра, [2 апр. 2020 г., 20:23:23]:
1. Wright E.K. Recent advances in characterizing the gastrointestinal microbiome in Crohn’s disease: A systematic review / E.K. Wright, M.A. Kamm, S.M. Teo, M. Inouye, J. Wagner, C.D. Kirkwood // J. Inflamm. Bowel Dis. – 2015, Vol.21 – P. 1219–1228.

1. Vrakas S. Intestinal Bacteria Composition and Translocation of Bacteria in Inflammatory Bowel Disease / K.C.Mountzouris, G. Michalopoulos, G. Karamanolis // J. PLoS One. – 2017, Vol.12, No. 1– P. 17-34.

1. Pride D.  Evidence of a robust resident bacteriophage population revealed through analysis of the human salivary virome / J. Salzman, M. Haynes, F. Rohwer, C. Davis-Long // J. ISME – 2012, Vol. 6, No. 6– P. 915-926.
2. Prince A. Nutritional problems in inflammatory bowel disease: The patient perspective / A. Prince, K. Whelan, A. Moosa [et al.] // JCC. – 2011. – Vol. 5. – P. 443–450.

1. Mashima I. Interaction between Streptococcus spp. and Veillonella tobetsuensis in the Early Stages of Oral Biofilm Formationn / I. Mashima, F. Nakazawa // Journal of Bacteriology.  – 2015, Vol. 197, No. 13 – P. 2104-2111.`)