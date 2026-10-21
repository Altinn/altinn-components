var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-CHdTRX1S.js";import{S as l}from"./Handshake-Bdi1W1wU.js";import{S as o}from"./Bell-D8ZZcvWP.js";import{S as m}from"./Hashtag-CB-lB-jJ.js";import{S as c}from"./Files-iMJ5qSC4.js";import{A as g}from"./AccountListItem-DMqVxn4Y.js";import{A as d}from"./AccountListItemDetails-CXUhQ9Fr.js";import{L as u}from"./List-Cx8iXXL1.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-sXsJE6ar.js";import"./Input-CiIWWSBU.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ChevronUp-Bc1dDmk3.js";import"./ChevronDown-BTY70Kvu.js";import"./ChevronRight-h2GXZqhR.js";import"./HeartFill-C8CDMWke.js";import"./ContextMenu-D-52UC8M.js";import"./useDropdownMenuController-D8aBOA94.js";import"./Dropdown-lGfq8dlC.js";import"./SearchField-CHvi1Rr9.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./MenuListItem-BuMUeh0I.js";import"./MenuListHeading-BF6vRJ1G.js";import"./MenuItem-C43FNrfh.js";import"./ItemMedia-BQC5N1RJ.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./ItemControls-D53PO9xK.js";import"./FieldBase-CkHB3870.js";import"./Typography-6g7ttECm.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./useMenu-erQCXILL.js";import"./MenuListDivider-tQrfQ--u.js";import"./InformationSquare-B7p_A_2X.js";import"./MenuElipsisHorizontal-BzRZw6re.js";import"./Section-C-qQMjwL.js";import"./Flex-BzRwEaeD.js";import"./ButtonGroup-DccEHAHc.js";import"./Divider-CbBQNDrL.js";import"./SettingsItem-B0q37g0i.js";import"./SettingsItemBase-DVmYVQzH.js";import"./ItemBase-Dt1Xxwib.js";import"./ItemLink-C4ONfugD.js";import"./SettingsModal-ciEMEXzg.js";import"./ModalBody-BiQ99NwW.js";import"./ButtonIcon-BDrjexQx.js";import"./ButtonLabel-DN7WHzkG.js";import"./AccountOrganization-BxxcN8CE.js";import"./Byline-V3bOcgnk.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
