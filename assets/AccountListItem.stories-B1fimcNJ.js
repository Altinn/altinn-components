import{a7 as t,c as o}from"./iframe-Dvni_u8W.js";import{S as s}from"./Handshake-Dl6KH-JI.js";import{S as e}from"./Bell-19eXnfyt.js";import{S as n}from"./Hashtag-F16NU9kL.js";import{S as p}from"./Files-CO9xL_TH.js";import{A as l}from"./AccountListItem-BNIb6FgF.js";import{A as m}from"./AccountListItemDetails-Bbusfd8F.js";import{L as c}from"./List-Dh2JDjT0.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Bbbg2QAe.js";import"./Input-B7CJ0KIf.js";import"./Avatar-BiSp7bMb.js";import"./AvatarGroup-BKR8NZ9M.js";import"./Badge-COuasLz3.js";import"./Tooltip-C31Zzbir.js";import"./Heading-CzH7HB6a.js";import"./useHighlightedText-CLLTD9Wh.js";import"./ChevronUp-B-cuVFt7.js";import"./ChevronDown-wy-_efuj.js";import"./ChevronRight-CHz63rRB.js";import"./HeartFill-w0cCZ4hO.js";import"./ContextMenu-DLU0U19W.js";import"./useDropdownMenuController-C43pfIK4.js";import"./Dropdown-BFgXRZ9P.js";import"./SearchField-CJEH8bYw.js";import"./MagnifyingGlass-B8ciBt3W.js";import"./FieldBase-ChKWoxnf.js";import"./Typography-UWzQw34I.js";import"./Field-BLs2k9pR.js";import"./Label-BsuoA68K.js";import"./useMenu-wTmWM5n-.js";import"./MenuListItem-9RJKOuM7.js";import"./MenuListDivider-CKiSBLyr.js";import"./MenuListHeading-CHgDesLl.js";import"./MenuItem-DOQN-kDc.js";import"./ItemMedia-BulytyAO.js";import"./Checkmark-BJLEGQFS.js";import"./ItemLabel-BnI0oSfj.js";import"./ItemControls-C8iXC4AM.js";import"./InformationSquare-ZFR98d1q.js";import"./MenuElipsisHorizontal-ChUvvCwa.js";import"./Section-CvMDXfkz.js";import"./Flex-C0xjv22N.js";import"./ButtonGroup-ChfLiHIR.js";import"./Divider-4VO8Bne5.js";import"./SettingsItem-DYbLVRx3.js";import"./SettingsItemBase-OGpKX3i4.js";import"./ItemBase-Dhpm696r.js";import"./ItemLink-DONwvW-Z.js";import"./SettingsModal-C7UnawWN.js";import"./ModalBody-CMihPznN.js";import"./ButtonIcon-DaGhQDc3.js";import"./ButtonLabel-BlQ3B1gR.js";import"./AccountOrganization-C16ZBM9T.js";import"./Byline-nZjd9pzD.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
