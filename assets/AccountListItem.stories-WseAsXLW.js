var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-ITS-2hJr.js";import{S as l}from"./Handshake-Gg2ANe-Q.js";import{S as o}from"./Bell-CYI2F0Fp.js";import{S as m}from"./Hashtag-Cv5WCCKr.js";import{S as c}from"./Files-BXF6wYPQ.js";import{A as g}from"./AccountListItem-Bb3C_9ML.js";import{A as d}from"./AccountListItemDetails-CcenLVfX.js";import{L as u}from"./List-B0u74Cjz.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-5Rr0WNcR.js";import"./Input-eieVqTh_.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./Heading-Bdv6LYG9.js";import"./useHighlightedText-B2HymlD1.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./ChevronRight-DGdpC6SO.js";import"./HeartFill-oj3X-ZaZ.js";import"./ContextMenu-CNjz3p0p.js";import"./useDropdownMenuController-CM_xdbKo.js";import"./Dropdown-wTA40yAo.js";import"./SearchField-BL8KL877.js";import"./MagnifyingGlass-CFIOBciK.js";import"./FieldBase-CQGaRX-e.js";import"./Typography-8PAPF6ji.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./useMenu-Cz88jtED.js";import"./MenuListItem-miDecag1.js";import"./MenuListDivider-BBgMhND-.js";import"./MenuListHeading-9OnaDQ2l.js";import"./MenuItem-D7bepgio.js";import"./ItemMedia-pMPhCUmI.js";import"./Checkmark-BcDZo_1U.js";import"./ItemLabel-CppZedji.js";import"./ItemControls-f_wXUIix.js";import"./InformationSquare-Cv25qdYy.js";import"./MenuElipsisHorizontal-C0z8jRtS.js";import"./Section-b3xCS6xU.js";import"./Flex-D_HsLLCq.js";import"./ButtonGroup-B79-xqIF.js";import"./Divider-XNCFH8Co.js";import"./SettingsItem-mBA5QWXI.js";import"./SettingsItemBase-BhuktrHX.js";import"./ItemBase-3_cP2lbl.js";import"./ItemLink-Ck57Gq-9.js";import"./SettingsModal-CxN7IwrT.js";import"./ModalBody-Cqe55Y6K.js";import"./ButtonIcon-DIolnyFl.js";import"./ButtonLabel-DKPFiNkA.js";import"./AccountOrganization-BAzBaImQ.js";import"./Byline-D-FlqTL-.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
