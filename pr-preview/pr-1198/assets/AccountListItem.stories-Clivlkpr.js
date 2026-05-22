import{j as t}from"./iframe-DXwGEFZf.js";import{S as o}from"./Handshake-oZAzPYYm.js";import{S as e}from"./Bell-2m2JrCjb.js";import{S as s}from"./Hashtag-DbB6ZkvQ.js";import{S as n}from"./Files-D4yny0rj.js";import{A as p}from"./AccountListItem-CFA6W486.js";import{L as m}from"./List-BgXw8LTl.js";import{A as l}from"./AccountListItemDetails-BXf-4cDf.js";import{B as c}from"./Button-BcOfKjgE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Df52yuGg.js";import"./ListItem-C3blsWJZ.js";import"./index-DpQTH4Pc.js";import"./Input-CjRvyA41.js";import"./tooltip-OQNLf2nv.js";import"./XMark-BspkucHC.js";import"./Icon-DEVqj2eM.js";import"./Skeleton-CD7VUCi3.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./ChevronUp-CJwhEbs5.js";import"./ChevronDown-Cc2tQRQQ.js";import"./ChevronRight-B7NrC3Rp.js";import"./HeartFill-Bx48nAIh.js";import"./ContextMenu-9EBdvE_8.js";import"./useDropdownMenuController-3S7tUMR-.js";import"./Dropdown-BZOF64eO.js";import"./MenuElipsisHorizontal-lS07k2bO.js";import"./SearchField-BCjbtpiQ.js";import"./MagnifyingGlass-CllD3bzP.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./Label-ChoE5xRO.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./Checkmark-DpC6lRZL.js";import"./ItemControls-DXxKFox6.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";import"./Flex-U6liI5ZR.js";import"./Section-BSKZ_Frt.js";import"./ButtonGroup-BgmjkJuw.js";import"./Divider-C7X97dOt.js";import"./SettingsItem-Vy4XXQw_.js";import"./SettingsItemBase-DH0-F2ub.js";import"./ItemLink-BttCTuhw.js";import"./SettingsModal-W0duOVpO.js";import"./ModalBody-v2jc6j_q.js";import"./ButtonIcon-DRE8-f_V.js";import"./ButtonLabel-pSIef_EU.js";import"./AccountOrganization-BGuRZRci.js";import"./Byline-DdT-FOev.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
