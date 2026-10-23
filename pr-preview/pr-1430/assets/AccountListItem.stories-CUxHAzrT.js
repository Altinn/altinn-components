var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-C320xpwq.js";import{S as l}from"./Handshake-BS6oSchI.js";import{S as o}from"./Bell-TfOG8jz6.js";import{S as m}from"./Hashtag-CX4tkzBo.js";import{S as c}from"./Files-rhxqKLxm.js";import{A as g}from"./AccountListItem-DT_83IIA.js";import{A as d}from"./AccountListItemDetails-DeRsxAwS.js";import{L as u}from"./List-pJ-3rYx1.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-B0VoyUTz.js";import"./Input-Butkrn3v.js";import"./Avatar-DiTaWPNi.js";import"./AvatarGroup-C3ZQ77zA.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./ChevronUp-DyDxvCOy.js";import"./ChevronDown-y1vJePuN.js";import"./ChevronRight-0obYraG7.js";import"./HeartFill-BAt_nvyH.js";import"./ContextMenu-Bo0gZwkj.js";import"./useDropdownMenuController-sAJd3n4N.js";import"./Dropdown-DOQP5U0B.js";import"./SearchField-BvARDiuT.js";import"./MagnifyingGlass-BNq1j2pw.js";import"./MenuListItem-BqKoFA4P.js";import"./MenuListHeading-BpIk0QC_.js";import"./MenuItem-RBRvsnc4.js";import"./ItemMedia-DXXjb0Ql.js";import"./Checkmark-DXZzi-ZC.js";import"./ItemLabel-DED-sXIi.js";import"./ItemControls-PDJ9i9Cv.js";import"./FieldBase-CS4MYGp7.js";import"./Typography-DeOYXGTy.js";import"./Field-WScL1nVe.js";import"./Label-CArvchbl.js";import"./useMenu-CNq5BiUb.js";import"./MenuListDivider-DFJO6x9b.js";import"./InformationSquare-BVSTZ5OZ.js";import"./MenuElipsisHorizontal-2Rt6dBTk.js";import"./Section-CQzKKRAw.js";import"./Flex-vd8VAqWN.js";import"./ButtonGroup-BhnnwPdG.js";import"./Divider-TV8z1--N.js";import"./SettingsItem-D_kSytrR.js";import"./SettingsItemBase-DtQq9leE.js";import"./ItemBase-CYhiMb3u.js";import"./ItemLink-CKqvDdvY.js";import"./SettingsModal-CTd1zDlQ.js";import"./ModalBody-BULMryTE.js";import"./ButtonIcon-D8kUPsWY.js";import"./ButtonLabel-XfOtcHaz.js";import"./AccountOrganization-CJmY01Is.js";import"./Byline-CzGGy-9N.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
