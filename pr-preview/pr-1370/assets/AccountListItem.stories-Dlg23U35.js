import{a7 as t,c as o}from"./iframe-DJnynaCo.js";import{S as s}from"./Handshake-B2EwSxXh.js";import{S as e}from"./Bell-VT38pNXd.js";import{S as n}from"./Hashtag-9w7ZZufg.js";import{S as p}from"./Files-Bk5iyqsK.js";import{A as l}from"./AccountListItem-FpaJlnK4.js";import{A as m}from"./AccountListItemDetails-DUErmfLu.js";import{L as c}from"./List-BTkgKM-8.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-B8Ai6_1A.js";import"./Input-BYb8Xo7l.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./Heading-DlyjjAZZ.js";import"./useHighlightedText-CYNOolzk.js";import"./ChevronUp-BZfYUYCO.js";import"./ChevronDown-CYeA95Pw.js";import"./ChevronRight-C7aaNXCF.js";import"./HeartFill-BlrI3Zwn.js";import"./ContextMenu-lI42Papp.js";import"./useDropdownMenuController-CZOriFGV.js";import"./Dropdown-DqJi5yfL.js";import"./SearchField-DQ5LjUme.js";import"./MagnifyingGlass-D5ryHey3.js";import"./FieldBase-D0EiQS06.js";import"./Typography-CiLhkoi6.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./useMenu-Dk5q8tzl.js";import"./MenuListItem-Ci9AWxXv.js";import"./MenuListDivider-B4GlA6zr.js";import"./MenuListHeading-DcFAqgb-.js";import"./MenuItem-MEQzSQZF.js";import"./ItemMedia-UE0Xgjah.js";import"./Checkmark-b-ALmYFM.js";import"./ItemLabel-CWPkZwXM.js";import"./ItemControls-CHuQfTIH.js";import"./InformationSquare-Bwpxsw1g.js";import"./MenuElipsisHorizontal-q9aEJHux.js";import"./Section-CrYFAueX.js";import"./Flex-DolhwIS-.js";import"./ButtonGroup-BNd80tZA.js";import"./Divider-DvU8eZEJ.js";import"./SettingsItem-P0wLk1B3.js";import"./SettingsItemBase-BVfGOX_L.js";import"./ItemBase-B5VYCo0l.js";import"./ItemLink-1GRrmWZq.js";import"./SettingsModal-3TFzA_aN.js";import"./ModalBody-cEHsgsLM.js";import"./ButtonIcon-CQYxhvkg.js";import"./ButtonLabel-Dj11Yzi6.js";import"./AccountOrganization-HI4ds03q.js";import"./Byline-BXy67g1G.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
