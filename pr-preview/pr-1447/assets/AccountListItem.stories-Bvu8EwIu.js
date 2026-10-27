var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-CtXhLetY.js";import{S as l}from"./Handshake-DcNOfccO.js";import{S as o}from"./Bell-CsPCYoSW.js";import{S as m}from"./Hashtag-fGL5CssJ.js";import{S as c}from"./Files-DmOlVYOj.js";import{A as g}from"./AccountListItem-BZ5ZIkoR.js";import{A as d}from"./AccountListItemDetails-D9VgR79v.js";import{L as u}from"./List-DnDiNJx5.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem--hs6nnp1.js";import"./Input-QpxxtH2z.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ChevronUp-7x0YByos.js";import"./ChevronDown-ChgXhb0d.js";import"./ChevronRight-S5R-64jg.js";import"./HeartFill-5pldSrgK.js";import"./ContextMenu-prDkaT0d.js";import"./useDropdownMenuController-iiDYFfhV.js";import"./Dropdown-D7OO9hIV.js";import"./SearchField-DGLH3IXX.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./MenuListItem-DIFzVMat.js";import"./MenuListHeading-6_KiCxEb.js";import"./MenuItem-Dg4o38tg.js";import"./ItemMedia-BiJdsWyj.js";import"./Checkmark-Dh1g_xoQ.js";import"./ItemLabel-D2Lcyfj9.js";import"./ItemControls-HM0P9mXN.js";import"./FieldBase-CnqvqYs3.js";import"./Typography-BeyzbKvD.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./useMenu-BNTP8R_q.js";import"./MenuListDivider-B0UBxccN.js";import"./InformationSquare-o37slIGL.js";import"./MenuElipsisHorizontal-Cc3YoMLz.js";import"./Section-BY6ZWS4H.js";import"./Flex-B2jEbRqX.js";import"./ButtonGroup-BWN2lsHW.js";import"./Divider-BbnOYJmg.js";import"./SettingsItem-BIgS8xWy.js";import"./SettingsItemBase-DJ85t7zR.js";import"./ItemBase-DZnnQWR_.js";import"./ItemLink-DjxEH_jH.js";import"./SettingsModal-C_c01Qjn.js";import"./ModalBody-Bv_B0VCd.js";import"./ButtonIcon-c1Jmgrga.js";import"./ButtonLabel-BHl8q492.js";import"./AccountOrganization-BCv-Jzdj.js";import"./Byline-B302tQe6.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
